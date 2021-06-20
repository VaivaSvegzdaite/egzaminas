package lt.sveikinimai.greeting;

import java.time.LocalDate;

public class CreateGreetingCommand {

    private String text;

    private String imageUrl;

    private String mp3File;

    private String nameg;

    private LocalDate date;

    private String greetingType;

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

    public LocalDate getDate() {
        return date;
    }

    public String getGreetingType() {
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

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public void setGreetingType(String greetingType) {
        this.greetingType = greetingType;
    }

}
