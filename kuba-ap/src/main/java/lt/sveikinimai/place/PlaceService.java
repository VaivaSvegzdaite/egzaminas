package lt.sveikinimai.place;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lt.sveikinimai.greeting.GreetingRepository;

@Service
public class PlaceService {

	private static final Logger LOGGER = LoggerFactory.getLogger(PlaceService.class);

	@Autowired
	private PlaceRepository placeRepository;

	@Autowired
	private GreetingRepository greetingRepository;

	@Transactional
	public List<Place> getPlaces() {
		return placeRepository.findAll();
	}

	@Transactional
	public Place getPlaceById(Long id) {
		return placeRepository.findById(id).get();
	}

	@Transactional
	public void create(CreatePlaceCommand c) {
		placeRepository.save(new Place(c.getTitle(), c.getAddress(), c.getLogo(), c.getPlaceType()));
	}

	@Transactional
	public void update(Long id, CreatePlaceCommand c) {
		if (placeRepository.findById(id).isPresent()) {
			Place a = placeRepository.findById(id).get();
			a.setTitle(c.getTitle());
			a.setAddress(c.getAddress());
			a.setLogo(c.getLogo());
			a.setPlaceType(c.getPlaceType());
			placeRepository.save(a);
		}
	}


	@Transactional
	public void deleteById(Long id) {
		placeRepository.deleteById(id);
	}

	@PostConstruct
	public void init() {
		LOGGER.info("Bean created, class:  " + getClass().getName() + ". Scope(default value): singleton");
	}

	@PreDestroy
	public void destroy() {
		LOGGER.info("Bean destroyed, class:  " + getClass().getName() + ". Scope(default value): singleton");
	}
}
