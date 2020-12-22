package lt.sveikinimai.address;

public class AddGreetingToAddress {

	private String greetingType;
	private String address;
	private String placeType;

	public AddGreetingToAddress(String greetingType, String address, String placeType) {
		super();
		this.greetingType = greetingType;
		this.address = address;
		this.placeType = placeType;
	}

	public String getGreetingType() {
		return greetingType;
	}

	public String getAddress() {
		return address;
	}

	public String getPlaceType() {
		return placeType;
	}

	public void setGreetingType(String greetingType) {
		this.greetingType = greetingType;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public void setPlaceType(String placeType) {
		this.placeType = placeType;
	}

}
