package lt2021.svs.inventorius;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt2021.svs.klientas.Klientas;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.ManyToMany;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Inventorius {

    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    private String pavadinimas;
    private Integer svoris;
    private Integer sektorius;
    private LocalDate regData;
    @JsonIgnore
    @ManyToMany(mappedBy = "inventorius")
    private Set<Klientas> klientai;

    public Inventorius(Long id, String pavadinimas, Integer svoris, Integer sektorius, LocalDate regData) {
        Id = id;
        this.pavadinimas = pavadinimas;
        this.svoris = svoris;
        this.sektorius = sektorius;
        this.regData = regData;
        this.klientai = new HashSet<>();
    }

    public Inventorius(String pavadinimas, Integer svoris, Integer sektorius, LocalDate regData) {
        this.pavadinimas = pavadinimas;
        this.svoris = svoris;
        this.sektorius = sektorius;
        this.regData = regData;
        this.klientai = klientai;
    }

    public void addKlientas(Klientas klientas) {
        this.klientai.add(klientas);
        klientas.addInventorius(this);
    }
    public void removeKlientas(Klientas klientas) {
        klientas.getInventorius().remove(this);
        this.klientai.remove(klientas);
    }
}
