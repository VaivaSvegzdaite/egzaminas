package lt2021.svs.inventorius;

import java.time.LocalDate;

public class CreateInventoriusComand {
    private String pavadinimas;
    private Integer svoris;
    private Integer sektorius;
    private LocalDate regData;

    public String getPavadinimas() {
        return pavadinimas;
    }

    public void setPavadinimas(String pavadinimas) {
        this.pavadinimas = pavadinimas;
    }

    public Integer getSvoris() {
        return svoris;
    }

    public void setSvoris(Integer svoris) {
        this.svoris = svoris;
    }

    public Integer getSektorius() {
        return sektorius;
    }

    public void setSektorius(Integer sektorius) {
        this.sektorius = sektorius;
    }

    public LocalDate getRegData() {
        return regData;
    }

    public void setRegData(LocalDate regData) {
        this.regData = regData;
    }
}
