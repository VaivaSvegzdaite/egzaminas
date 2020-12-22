package lt.sveikinimai.greeting;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GreetingService {

	private static final Logger LOGGER = LoggerFactory.getLogger(GreetingService.class);

	@Autowired
	private GreetingRepository greetingRepository;

	@Transactional
	public List<Greeting> getGreetings() {
		return greetingRepository.findAll();
	}

	@Transactional
	public Greeting getGreetingById(Long id) {
		return greetingRepository.findById(id).get();
	}

	@Transactional
	public void create(CreateGreetingCommand c) {
		greetingRepository.save(new Greeting(c.getText(), c.getImageUrl(), c.getMp3File(), c.getNameg(), c.getDate(),
				c.getGreetingType()));
	}

	@Transactional
	public void update(CreateGreetingCommand c, Long id) {
		if (greetingRepository.findById(id).isPresent()) {
			Greeting g = greetingRepository.findById(id).get();
			g.setText(c.getText());
			g.setImageUrl(c.getImageUrl());
			g.setMp3File(c.getMp3File());
			g.setNameg(c.getNameg());
			g.setDate(c.getDate());
			g.setGreetingType(c.getGreetingType());
			greetingRepository.save(g);
		}
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
}
