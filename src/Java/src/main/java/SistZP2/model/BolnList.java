package SistZP2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import SistZP2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: БольнЛист
 */
@Entity(name = "IISSistZP2БольнЛист")
@Table(schema = "public", name = "БольнЛист")
public class BolnList {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ЗаСчетФСС")
    private Double засчетфсс;

    @Column(name = "ВсегоНачисл")
    private Double всегоначисл;

    @Column(name = "ДатаОконБол")
    private Date датаоконбол;

    @Column(name = "ДатаНачБол")
    private Date датаначбол;

    @Column(name = "НомерДок")
    private Integer номердок;

    @Column(name = "КолДней")
    private Integer колдней;

    @Column(name = "Повторный")
    private Boolean повторный;

    @Column(name = "Первичный")
    private Boolean первичный;

    @Column(name = "Причина")
    private String причина;

    @Column(name = "ЗаСчетРаб")
    private Double засчетраб;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RaschetnyjList")
    @Convert("RaschetnyjList")
    @Column(name = "РасчетныйЛист", length = 16, unique = true, nullable = false)
    private UUID _raschetnyjlistid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RaschetnyjList", insertable = false, updatable = false)
    private RaschetnyjList raschetnyjlist;


    public BolnList() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getЗаСчетФСС() {
      return засчетфсс;
    }

    public void setЗаСчетФСС(Double засчетфсс) {
      this.засчетфсс = засчетфсс;
    }

    public Double getВсегоНачисл() {
      return всегоначисл;
    }

    public void setВсегоНачисл(Double всегоначисл) {
      this.всегоначисл = всегоначисл;
    }

    public Date getДатаОконБол() {
      return датаоконбол;
    }

    public void setДатаОконБол(Date датаоконбол) {
      this.датаоконбол = датаоконбол;
    }

    public Date getДатаНачБол() {
      return датаначбол;
    }

    public void setДатаНачБол(Date датаначбол) {
      this.датаначбол = датаначбол;
    }

    public Integer getНомерДок() {
      return номердок;
    }

    public void setНомерДок(Integer номердок) {
      this.номердок = номердок;
    }

    public Integer getКолДней() {
      return колдней;
    }

    public void setКолДней(Integer колдней) {
      this.колдней = колдней;
    }

    public Boolean getПовторный() {
      return повторный;
    }

    public void setПовторный(Boolean повторный) {
      this.повторный = повторный;
    }

    public Boolean getПервичный() {
      return первичный;
    }

    public void setПервичный(Boolean первичный) {
      this.первичный = первичный;
    }

    public String getПричина() {
      return причина;
    }

    public void setПричина(String причина) {
      this.причина = причина;
    }

    public Double getЗаСчетРаб() {
      return засчетраб;
    }

    public void setЗаСчетРаб(Double засчетраб) {
      this.засчетраб = засчетраб;
    }


}