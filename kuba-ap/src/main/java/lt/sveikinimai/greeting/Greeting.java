package lt.sveikinimai.greeting;

import java.util.ArrayList;
import java.util.Date;
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
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;

import lt.sveikinimai.address.Address;

@Entity
public class Greeting {

	@Column
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long Id;
	@Column(unique = true)
	@Size(max = 3)
	private String text;
	@Column
	private String imageUrl;
	@Column
	private String mp3File;
	@Column
	private String nameg;
	@Column
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private Date date;
	@Column
	@Enumerated(EnumType.STRING)
	private GreetingType greetingType;

	@ManyToMany(cascade = { CascadeType.MERGE, CascadeType.DETACH }, fetch = FetchType.EAGER)
	@JoinTable(name = "greeting_address", joinColumns = { @JoinColumn(name = "greeting_id") }, inverseJoinColumns = {
			@JoinColumn(name = "address_id") })
	private List<Address> addresses = new ArrayList<>();

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

	public void addAddress(Address address) {
		this.addresses.add(address);
	}

	public void removeAddress(Address address) {
		this.addresses.remove(address);
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

	public List<Address> getAddresses() {
		return addresses;
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

	public void setAddresses(List<Address> addresses) {
		this.addresses = addresses;
	}

}
