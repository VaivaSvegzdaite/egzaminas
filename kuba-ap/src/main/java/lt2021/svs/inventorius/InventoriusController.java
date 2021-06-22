package lt2021.svs.inventorius;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/inventorius")
public class InventoriusController {

    @Autowired
    private InventoriusService inventoriusService;

    @Autowired
    public InventoriusController(InventoriusService inventoriusService) {
        this.inventoriusService = inventoriusService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Inventorius> getInventorius() {
        return inventoriusService.getInventorius();
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public Inventorius getInventoriusById(@PathVariable Long id) {
        return inventoriusService.getInventoriusById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void createInventorius(@RequestBody final CreateInventoriusComand c) {
        inventoriusService.create(c);
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.PUT)
    public void updateInventorius(@PathVariable Long id,
                            @RequestBody final CreateInventoriusComand c) {
        inventoriusService.update(id, c);
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
    public void deleteInventorius(@PathVariable final Long id) {
        inventoriusService.deleteById(id);
    }

}
