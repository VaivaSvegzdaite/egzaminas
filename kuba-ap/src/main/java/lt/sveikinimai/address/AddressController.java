package lt.sveikinimai.address;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@RestController
@Api(value = "address")
@RequestMapping(value = "/api/addresses")
public class AddressController {

	@Autowired
	private AddressService addressService;

	@Autowired
	public AddressController(AddressService addressService) {
		this.addressService = addressService;
	}

	@RequestMapping(method = RequestMethod.GET)
	@ApiOperation(value = "Get addresses", notes = "Returns all addresses")
	public List<Address> getAddresses() {
		return addressService.getAddresses();
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.GET)
	@ApiOperation(value = "Get address by ID", notes = "Returns a single address by ID")
	public Address getAddressById(@ApiParam(value = "address id", required = true) @Valid @PathVariable Long id) {
		return addressService.getAddressById(id);
	}

	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	@ApiOperation(value = "Create address", notes = "Creates new  address")
	public void createAddress(
			@ApiParam(value = "address Data", required = true) @Valid @RequestBody final CreateAddressCommand c) {
		addressService.create(c);
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.OK)
	public void updateGreeting(@ApiParam(value = "updated address data", required = true) @Valid @PathVariable Long id,
			@RequestBody final CreateAddressCommand c) {
		addressService.update(c, id);
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@ApiOperation(value = "Delete address", notes = "deletes address by id")
	public void delete(@ApiParam(value = "address id", required = true) @PathVariable final Long id) {
		addressService.deleteById(id);
	}

}
