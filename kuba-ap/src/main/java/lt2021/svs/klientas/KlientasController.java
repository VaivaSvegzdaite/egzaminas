package lt2021.svs.klientas;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/klientai")
public class KlientasController {

    @Autowired
    private KlientasService klientasService;

    @Autowired
    public KlientasController(KlientasService klientasService) {
        this.klientasService = klientasService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Klientas> getKlientai() {
        return klientasService.getKlientai();
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public Klientas getKlientasById(@PathVariable Long id) {
        return klientasService.getKlientasById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public List<Klientas> addKlientas(
            @RequestBody final CreateKlientasCommand c) {
        klientasService.add((new Klientas(c.getVardas(), c.getPavarde(), c.getDob(), c.getTel(), c.getTipas())));
        return klientasService.getKlientai();
    }

    public void updateKlientas(@PathVariable Long id,
                               @RequestBody final CreateKlientasCommand c) {
        klientasService.update(id, c);
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable final Long id) {
        klientasService.deleteById(id);
    }

    @PostMapping("/{klientasId}/inventorius/{inventoriusId}")
    public void connectKlientasAndInventorius(@PathVariable final Long klientasId, @PathVariable final Long inventoriusId) {
        klientasService.connectKlientasAndInventorius(klientasId, inventoriusId);
    }
}
