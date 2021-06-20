package lt.sveikinimai.greeting;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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
	public Greeting getGreetingById(@ApiParam(value = "greeting id") @PathVariable Long id) {
		return greetingService.getGreetingById(id);
	}

	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	@ApiOperation(value = "Create greeting", notes = "Creates new  greeting")
	public List<Greeting> addGreeting(
			@ApiParam(value = "greeting Data") @RequestBody final CreateGreetingCommand c) {
		greetingService.add(new Greeting(c.getText(), c.getImageUrl(), c.getMp3File(), c.getNameg(), c.getDate(),
				c.getGreetingType()));
		return greetingService.getGreetings();
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.OK)
	public void updateGreeting(@ApiParam(value = "updated greeting data") @PathVariable Long id,
			@RequestBody final CreateGreetingCommand c) {
		greetingService.update(id, c);
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@ApiOperation(value = "Delete greeting", notes = "deletes greeting by id")
	public void delete(@ApiParam(value = "greeting id") @PathVariable final Long id) {
		greetingService.deleteById(id);
	}

	@PostMapping("/{greetingId}/place/{placeId}")
	public void connectGreetingAndPlace(@PathVariable final Long greetingId, @PathVariable final Long placeId){
		greetingService.connectGreetingAndPlace(greetingId, placeId);
	}

}
