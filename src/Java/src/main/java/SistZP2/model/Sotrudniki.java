package SistZP2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import SistZP2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Сотрудники
 */
@Entity(name = "IISSistZP2Сотрудники")
@Table(schema = "public", name = "Сотрудники")
public class Sotrudniki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Оклад")
    private Double оклад;

    @Column(name = "Почта")
    private String почта;

    @Column(name = "Код")
    private Integer код;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "ПроцСтавка")
    private Double процставка;

    @Column(name = "РабТел")
    private String рабтел;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizacii")
    @Convert("Organizacii")
    @Column(name = "Организации", length = 16, unique = true, nullable = false)
    private UUID _organizaciiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizacii", insertable = false, updatable = false)
    private Organizacii organizacii;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Otdely")
    @Convert("Otdely")
    @Column(name = "Отделы", length = 16, unique = true, nullable = false)
    private UUID _otdelyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Otdely", insertable = false, updatable = false)
    private Otdely otdely;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dolzhnosti")
    @Convert("Dolzhnosti")
    @Column(name = "Должности", length = 16, unique = true, nullable = false)
    private UUID _dolzhnostiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dolzhnosti", insertable = false, updatable = false)
    private Dolzhnosti dolzhnosti;


    public Sotrudniki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getОклад() {
      return оклад;
    }

    public void setОклад(Double оклад) {
      this.оклад = оклад;
    }

    public String getПочта() {
      return почта;
    }

    public void setПочта(String почта) {
      this.почта = почта;
    }

    public Integer getКод() {
      return код;
    }

    public void setКод(Integer код) {
      this.код = код;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public Double getПроцСтавка() {
      return процставка;
    }

    public void setПроцСтавка(Double процставка) {
      this.процставка = процставка;
    }

    public String getРабТел() {
      return рабтел;
    }

    public void setРабТел(String рабтел) {
      this.рабтел = рабтел;
    }


}