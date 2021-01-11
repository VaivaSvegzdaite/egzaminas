package lt.sveikinimai.greeting;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Size;

import lt.sveikinimai.place.Place;

@Entity
public class Greeting {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long Id;
	@Size(min = 3)
	private String text;
	private String imageUrl;
	private String mp3File;
	private String nameg;
	@Temporal(TemporalType.TIMESTAMP)
	private Date date;
	@Enumerated(EnumType.STRING)
	private GreetingType greetingType;

	@ManyToMany(cascade = { CascadeType.MERGE, CascadeType.DETACH }, fetch = FetchType.EAGER)
	@JoinTable(name = "greeting_place", joinColumns = { @JoinColumn(name = "greeting_id") }, inverseJoinColumns = {
			@JoinColumn(name = "place_id") })
	private List<Place> places = new ArrayList<>();

	public Greeting(String text, String imageUrl, String mp3File, String nameg, Date date, GreetingType greetingType) {
		super();
		this.text = text;
		this.imageUrl = imageUrl;
		this.mp3File = mp3File;
		this.nameg = nameg;
		this.date = date;
		this.greetingType = greetingType;
	}

	public Greeting() {
		super();
	}

	public void addPlace(Place place) {
		this.places.add(place);
	}

	public void removePlace(Place place) {
		this.places.remove(place);
	}

	public Long getId() {
		return Id;
	}

	public String getText() {
		return text;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public String getMp3File() {
		return mp3File;
	}

	public String getNameg() {
		return nameg;
	}

	public Date getDate() {
		return date;
	}

	public GreetingType getGreetingType() {
		return greetingType;
	}

	public List<Place> getPlaces() {
		return places;
	}

	public void setId(Long id) {
		Id = id;
	}

	public void setText(String text) {
		this.text = text;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public void setMp3File(String mp3File) {
		this.mp3File = mp3File;
	}

	public void setNameg(String nameg) {
		this.nameg = nameg;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public void setGreetingType(GreetingType greetingType) {
		this.greetingType = greetingType;
	}

	public void setPlaces(List<Place> places) {
		this.places = places;
	}

}
