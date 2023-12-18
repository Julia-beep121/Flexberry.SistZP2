package SistZP2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import SistZP2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: УчетРабочВр
 */
@Entity(name = "IISSistZP2УчетРабочВр")
@Table(schema = "public", name = "УчетРабочВр")
public class UchetRabochVr {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "ОтрабЧасы")
    private Integer отрабчасы;

    @Column(name = "ТипОтр")
    private String типотр;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;


    public UchetRabochVr() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Integer getОтрабЧасы() {
      return отрабчасы;
    }

    public void setОтрабЧасы(Integer отрабчасы) {
      this.отрабчасы = отрабчасы;
    }

    public String getТипОтр() {
      return типотр;
    }

    public void setТипОтр(String типотр) {
      this.типотр = типотр;
    }


}