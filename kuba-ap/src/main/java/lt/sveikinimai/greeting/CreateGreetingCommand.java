package lt.sveikinimai.greeting;

import java.util.Date;

public class CreateGreetingCommand {

	private String text;

	private String imageUrl;

	private String mp3File;

	private String nameg;

	private Date date;

	private GreetingType greetingType;

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

}
