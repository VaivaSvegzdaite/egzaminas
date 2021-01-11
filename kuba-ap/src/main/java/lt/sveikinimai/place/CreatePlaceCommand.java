package lt.sveikinimai.place;

public class CreatePlaceCommand {
	private String title;

	private String address;

	private String logo;

	private PlaceType placeType;

	public CreatePlaceCommand(String title, String address, String logo, PlaceType placeType) {
		this.title = title;
		this.address = address;
		this.logo = logo;
		this.placeType = placeType;
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

}
