package lt.sveikinimai.greeting;

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
@Api(value = "greeting")
@RequestMapping(value = "/api/greetings")
public class GreetingController {

	@Autowired
	private GreetingService greetingService;

	@Autowired
	public GreetingController(GreetingService greetingService) {
		this.greetingService = greetingService;
	}

	@RequestMapping(method = RequestMethod.GET)
	@ApiOperation(value = "Get greeting", notes = "Returns all greeting")
	public List<Greeting> getGreetings() {
		return greetingService.getGreetings();
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.GET)
	@ApiOperation(value = "Get greeting by ID", notes = "Returns a single greeting by ID")
	public Greeting getGreetingById(@ApiParam(value = "greeting id", required = true) @Valid @PathVariable Long id) {
		return greetingService.getGreetingById(id);
	}

	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	@ApiOperation(value = "Create greeting", notes = "Creates new  greeting")
	public void createGreeting(
			@ApiParam(value = "greeting Data", required = true) @Valid @RequestBody final CreateGreetingCommand c) {
		greetingService.create(c);
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.OK)
	public void updateGreeting(@ApiParam(value = "updated greeting data", required = true) @Valid @PathVariable Long id,
			@RequestBody final CreateGreetingCommand c) {
		greetingService.update(c, id);
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@ApiOperation(value = "Delete greeting", notes = "deletes greeting by id")
	public void delete(@ApiParam(value = "greeting id", required = true) @PathVariable final Long id) {
		greetingService.deleteById(id);
	}

}
