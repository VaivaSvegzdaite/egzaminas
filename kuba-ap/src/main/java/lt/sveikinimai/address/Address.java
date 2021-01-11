//package lt.sveikinimai.address;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import javax.persistence.CascadeType;
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.EnumType;
//import javax.persistence.Enumerated;
//import javax.persistence.FetchType;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.ManyToMany;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//
//import lt.sveikinimai.greeting.Greeting;
//
////@TODO pasikeisti klase, repo, control ir kt is Place i Place (adres jau yra klaseje)
//
//@Entity
//public class Address {
//	@Column
//	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
//	private Long Id;
//	@Column(unique = true)
//	private String title;
//	@Column
//	private String address;
//	@Column
//	private String logo;
//	@Column
//	@Enumerated(EnumType.STRING)
//	private AddressType addressType;
//
//	@JsonIgnore
//	@ManyToMany(mappedBy = "addresses", cascade = { CascadeType.MERGE, CascadeType.DETACH }, fetch = FetchType.EAGER)
//	private List<Greeting> greetings = new ArrayList<>();
//
////	@ElementCollection
////	@MapKeyColumn(name = "greeting_address")
////	private Map<Long, String> greetingAddressesMap = new HashMap<Long, String>();
//
//	public Address(String title, String address, String logo, AddressType addressType) {
//		super();
//		this.title = title;
//		this.address = address;
//		this.logo = logo;
//		this.addressType = addressType;
//	}
//
//	public Address() {
//		super();
//	}
//
////	public void addGreeting(Greeting greeting, String title) {
//	public void addGreeting(Greeting greeting) {
////		this.greetingAddressesMap.put(greeting.getId(), title);
//		this.greetings.add(greeting);
//		greeting.addAddress(this);
//	}
//
//	public void removeGreeting(Greeting greeting) {
////		this.greetingAddressesMap.remove(greeting.getId());
//		greeting.getAddresses().remove(this);
//		this.greetings.remove(greeting);
//	}
//
//	public Long getId() {
//		return Id;
//	}
//
//	public String getTitle() {
//		return title;
//	}
//
//	public String getAddress() {
//		return address;
//	}
//
//	public String getLogo() {
//		return logo;
//	}
//
//	public AddressType getAddressType() {
//		return addressType;
//	}
//
//	public List<Greeting> getGreetings() {
//		return greetings;
//	}
//
////	public Map<Long, String> getGreetingAddressesMap() {
////		return greetingAddressesMap;
////	}
//
//	public void setId(Long id) {
//		Id = id;
//	}
//
//	public void setTitle(String title) {
//		this.title = title;
//	}
//
//	public void setAddress(String address) {
//		this.address = address;
//	}
//
//	public void setLogo(String logo) {
//		this.logo = logo;
//	}
//
//	public void setAddressType(AddressType addressType) {
//		this.addressType = addressType;
//	}
//
//	public void setGreetings(List<Greeting> greetings) {
//		this.greetings = greetings;
//	}
////
////	public void setGreetingAddressesMap(Map<Long, String> greetingAddressesMap) {
////		this.greetingAddressesMap = greetingAddressesMap;
////	}
//
//}
