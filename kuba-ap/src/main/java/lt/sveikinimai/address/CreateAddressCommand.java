package lt.sveikinimai.address;

public class CreateAddressCommand {
	private String title;

	private String address;

	private String logo;

	private AddressType addressType;

	public CreateAddressCommand(String title, String address, String logo, AddressType addressType) {
		this.title = title;
		this.address = address;
		this.logo = logo;
		this.addressType = addressType;
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

	public AddressType getAddressType() {
		return addressType;
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

	public void setAddressType(AddressType addressType) {
		this.addressType = addressType;
	}

}
