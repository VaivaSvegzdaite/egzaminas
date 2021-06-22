package lt2021.svs.klientas;

import lt2021.svs.inventorius.Inventorius;
import lt2021.svs.inventorius.InventoriusRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class KlientasService {

    private static final Logger LOGGER = LoggerFactory.getLogger(Klientas.class);

    @Autowired
    private KlientasRepository klientasRepository;

    @Autowired
    private InventoriusRepository inventoriusRepository;

    @Transactional
    public List<Klientas> getKlientai() {
        return klientasRepository.findAll();
    }

    @Transactional
    public void add(Klientas klientas) {
        klientasRepository.save(klientas);
    }

    @Transactional
    public Klientas getKlientasById(Long id) {
        return klientasRepository.findById(id).get();
    }

    @Transactional
    public void update(Long id, CreateKlientasCommand c) {
        Klientas k = klientasRepository.findById(id).orElse(null);
        k.setVardas(c.getVardas());
        k.setPavarde(c.getPavarde());
        k.setDob(c.getDob());
        k.setTel(c.getTel());
        k.setTipas(c.getTipas());
        klientasRepository.save(k);
    }

    @Transactional
    public void deleteById(Long id) {
        klientasRepository.deleteById(id);
    }

    @Transactional
    public void connectKlientasAndInventorius(Long klientasId, Long inventoriusId) {
        Klientas k = klientasRepository.getOne(klientasId);
        Inventorius i = inventoriusRepository.getOne(inventoriusId);
        k.addInventorius(i);
        i.addKlientas(k);
        klientasRepository.save(k);
    }
}
