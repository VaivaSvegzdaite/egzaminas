package lt2021.svs.klientas;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt2021.svs.inventorius.Inventorius;
import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Klientas {

    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    private String vardas;
    private String pavarde;
    private LocalDate dob;
    private String tel;
    private String tipas;

    @ManyToMany
    @JoinTable(name = "kleintas_inventorius", joinColumns = @JoinColumn(name = "klientas_id"), inverseJoinColumns =
    @JoinColumn(name = "inventorius_id"))
    private Set<Inventorius> inventorius;

    public Klientas(Long id, String vardas, String pavarde, LocalDate dob, String tel, String tipas) {
        Id = id;
        this.vardas = vardas;
        this.pavarde = pavarde;
        this.dob = dob;
        this.tel = tel;
        this.tipas = tipas;
        this.inventorius = new HashSet<>();
    }

    public Klientas(String vardas, String pavarde, LocalDate dob, String tel, String tipas) {
        this.vardas = vardas;
        this.pavarde = pavarde;
        this.dob = dob;
        this.tel = tel;
        this.tipas = tipas;
    }

    public void addInventorius(Inventorius inventorius) {
        this.inventorius.add(inventorius);
    }

    public void removeInventorius(Inventorius inventorius) {
        this.inventorius.remove(inventorius);
    }

}
