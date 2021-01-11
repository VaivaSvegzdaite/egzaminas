package lt.sveikinimai.place;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lt.sveikinimai.greeting.Greeting;

@Entity
public class Place {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long Id;
	@Column(unique = true)
	private String title;
	private String address;
	private String logo;
	@Enumerated(EnumType.STRING)
	private PlaceType placeType;

	@JsonIgnore
	@ManyToMany(mappedBy = "places", cascade = { CascadeType.MERGE, CascadeType.DETACH }, fetch = FetchType.EAGER)
	private List<Greeting> greetings = new ArrayList<>();

	public Place(String title, String address, String logo, PlaceType placeType) {
		super();
		this.title = title;
		this.address = address;
		this.logo = logo;
		this.placeType = placeType;
	}

	public Place() {
		super();
	}

	public void addGreeting(Greeting greeting) {
		this.greetings.add(greeting);
		greeting.addPlace(this);
	}

	public void removeGreeting(Greeting greeting) {
		greeting.getPlaces().remove(this);
		this.greetings.remove(greeting);
	}

	public Long getId() {
		return Id;
	}

	public String getTitle() {
		return title;
	}

	public String getAddress() {
		return address;
	}

	public String getLogo() {
		return logo;
	}

	public PlaceType getAddressType() {
		return placeType;
	}

	public List<Greeting> getGreetings() {
		return greetings;
	}

	public void setId(Long id) {
		Id = id;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public void setLogo(String logo) {
		this.logo = logo;
	}

	public void setAddressType(PlaceType placeType) {
		this.placeType = placeType;
	}

	public void setGreetings(List<Greeting> greetings) {
		this.greetings = greetings;
	}

}
