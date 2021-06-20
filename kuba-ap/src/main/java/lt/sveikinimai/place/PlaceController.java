package lt.sveikinimai.place;

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
@Api(value = "place")
@RequestMapping(value = "/api/places")
public class PlaceController {
    @Autowired
    private PlaceService placeService;

    @Autowired
    public PlaceController(PlaceService placeService) {
        this.placeService = placeService;
    }

    @RequestMapping(method = RequestMethod.GET)
    @ApiOperation(value = "Get places", notes = "Returns all places")
    public List<Place> getPlaces() {
        return placeService.getPlaces();
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    @ApiOperation(value = "Get place by ID", notes = "Returns a single place by ID")
    public Place getPlaceById(@ApiParam(value = "place id") @PathVariable Long id) {
        return placeService.getPlaceById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    @ApiOperation(value = "Create place", notes = "Creates new  place")
    public void createPlace(
            @ApiParam(value = "place Data") @RequestBody final CreatePlaceCommand p) {
        placeService.create(p);
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public void updatePlace(@ApiParam(value = "updated place data") @PathVariable Long id,
                            @RequestBody final CreatePlaceCommand c) {
        placeService.update(id, c);
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @ApiOperation(value = "Delete place", notes = "deletes place by id")
    public void deletePlace(@ApiParam(value = "place id") @PathVariable final Long id) {
        placeService.deleteById(id);
    }


}
