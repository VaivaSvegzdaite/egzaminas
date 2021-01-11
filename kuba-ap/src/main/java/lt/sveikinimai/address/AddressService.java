//package lt.sveikinimai.address;
//
//import java.util.List;
//
//import javax.annotation.PostConstruct;
//import javax.annotation.PreDestroy;
//import javax.transaction.Transactional;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import lt.sveikinimai.greeting.GreetingRepository;
//
//@Service
//public class AddressService {
//
//	private static final Logger LOGGER = LoggerFactory.getLogger(AddressService.class);
//
//	@Autowired
//	private AddressRepository addressRepository;
//
//	@Autowired
//	private GreetingRepository greetingRepository;
//
//	@Transactional
//	public List<Address> getAddresses() {
//		return addressRepository.findAll();
//	}
//
//	@Transactional
//	public Address getAddressById(Long id) {
//		return addressRepository.findById(id).get();
//	}
//
//	@Transactional
//	public void create(CreateAddressCommand c) {
//		addressRepository.save(new Address(c.getTitle(), c.getAddress(), c.getLogo(), c.getAddressType()));
//	}
//
//	@Transactional
//	public void update(CreateAddressCommand c, Long id) {
//		if (addressRepository.findById(id).isPresent()) {
//			Address a = addressRepository.findById(id).get();
//			a.setTitle(c.getTitle());
//			a.setAddress(c.getAddress());
//			a.setLogo(c.getLogo());
//			a.setAddressType(c.getAddressType());
//			addressRepository.save(a);
//		}
//	}
//
//	@Transactional
//	public void deleteById(Long id) {
//		addressRepository.deleteById(id);
//	}
//
////	@Transactional
////	public void addGreeting() {
////	
////	}
//
////	@Transactional
////	public void removeGreeting() {
////
////	}
//
//	@PostConstruct
//	public void init() {
//		LOGGER.info("Bean created, class:  " + getClass().getName() + ". Scope(default value): singleton");
//
//	}
//
//	@PreDestroy
//	public void destroy() {
//		LOGGER.info("Bean destroyed, class:  " + getClass().getName() + ". Scope(default value): singleton");
//	}
//}
