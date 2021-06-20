package lt.sveikinimai.greeting;

import java.time.LocalDate;
import java.util.*;

import javax.persistence.*;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.sveikinimai.place.Place;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Greeting {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    @Size(min = 3)
    private String text;
    private String imageUrl;
    private String mp3File;
    private String nameg;
    private LocalDate date;
    private String greetingType;

    @ManyToMany
    @JoinTable(name = "greeting_places", joinColumns = @JoinColumn(name = "greeting_id"), inverseJoinColumns =
    @JoinColumn(name = "place_id"))
//	@JsonIgnore
    private Set<Place> places;

    public Greeting(String text, String imageUrl, String mp3File, String nameg, LocalDate date, String greetingType) {
        super();
        this.text = text;
        this.imageUrl = imageUrl;
        this.mp3File = mp3File;
        this.nameg = nameg;
        this.date = date;
        this.greetingType = greetingType;
        this.places = new HashSet<>();
    }

    public void addPlace(Place place) {
        this.places.add(place);
    }

    public void removePlace(Place place) {
        this.places.remove(place);
    }
}
