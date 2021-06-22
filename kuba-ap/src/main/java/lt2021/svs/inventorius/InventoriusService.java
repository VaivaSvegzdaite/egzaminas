package lt2021.svs.inventorius;


import lt2021.svs.klientas.KlientasRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class InventoriusService {

    private static final Logger LOGGER = LoggerFactory.getLogger(Inventorius.class);

    @Autowired
    private InventoriusRepository inventoriusRepository;

    @Autowired
    private KlientasRepository klientasRepository;

    @Transactional
    public List<Inventorius> getInventorius() {
        return inventoriusRepository.findAll();
    }

    @Transactional
    public Inventorius getInventoriusById(Long id) {
        return inventoriusRepository.findById(id).get();
    }

    @Transactional
    public void create(CreateInventoriusComand c) {
        inventoriusRepository.save(new Inventorius(c.getPavadinimas(), c.getSvoris(), c.getSektorius(), c.getRegData()));
    }

    @Transactional
    public void update(Long id, CreateInventoriusComand c) {
        if (inventoriusRepository.findById(id).isPresent()) {
           Inventorius i = inventoriusRepository.findById(id).get();
           i.setPavadinimas((c.getPavadinimas()));
           i.setSvoris(c.getSvoris());
           i.setSektorius(c.getSektorius());
           i.setRegData(c.getRegData());
            inventoriusRepository.save(i);
        }
    }

    @Transactional
    public void deleteById(Long id) {
        inventoriusRepository.deleteById(id);
    }


}
