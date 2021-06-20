package lt.sveikinimai.place;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.sveikinimai.greeting.Greeting;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Place {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(unique = true)
	private String title;
	private String logo;
	private String address;
	@Enumerated(EnumType.STRING)
	private PlaceType placeType;

	@JsonIgnore
	@ManyToMany(mappedBy = "places")
	private Set<Greeting> greetings;

	public Place(Long id, String title, String logo, String address, PlaceType placeType) {
		this.id = id;
		this.title = title;
		this.logo = logo;
		this.address = address;
		this.placeType = placeType;
		this.greetings = new HashSet<>();
	}

	public Place(String title, String address, String logo, PlaceType placeType) {
		this.title = title;
		this.address = address;
		this.logo = logo;
		this.placeType = placeType;
	}

	public void addGreeting(Greeting greeting) {
		this.greetings.add(greeting);
		greeting.addPlace(this);
	}
	public void removeGreeting(Greeting greeting) {
		greeting.getPlaces().remove(this);
		this.greetings.remove(greeting);
	}
}
