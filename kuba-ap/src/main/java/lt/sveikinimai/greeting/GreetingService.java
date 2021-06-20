package lt.sveikinimai.greeting;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.transaction.Transactional;

import lt.sveikinimai.place.Place;
import lt.sveikinimai.place.PlaceRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GreetingService {

	private static final Logger LOGGER = LoggerFactory.getLogger(GreetingService.class);

	@Autowired
	private GreetingRepository greetingRepository;

	@Autowired
	private PlaceRepository placeRepository;

	@Transactional
	public List<Greeting> getGreetings() {
		return greetingRepository.findAll();
	}

	@Transactional
	public void add(Greeting greeting) {
		greetingRepository.save(greeting);
	}

	@Transactional
	public Greeting getGreetingById(Long id) {
		return greetingRepository.findById(id).get();
	}

	@Transactional
	public void update(Long id, CreateGreetingCommand c){
		Greeting g = greetingRepository.findById(id).orElse(null);
		g.setText(c.getText());
		g.setImageUrl(c.getImageUrl());
		g.setMp3File(c.getMp3File());
		g.setNameg(c.getNameg());
		g.setDate(c.getDate());
		g.setGreetingType(c.getGreetingType());
		greetingRepository.save(g);
	}

	@Transactional
	public void deleteById(Long id) {
		greetingRepository.deleteById(id);
	}

	@PostConstruct
	public void init() {
		LOGGER.info("Bean created, class:  " + getClass().getName() + ". Scope(default value): singleton");
	}

	@PreDestroy
	public void destroy() {
		LOGGER.info("Bean destroyed, class:  " + getClass().getName() + ". Scope(default value): singleton");
	}

	@Transactional
	public void connectGreetingAndPlace(Long greetingId, Long placeId) {
		Greeting g = greetingRepository.getOne(greetingId);
		Place p = placeRepository.getOne(placeId);
		g.addPlace(p);
		greetingRepository.save(g);
	}
}
