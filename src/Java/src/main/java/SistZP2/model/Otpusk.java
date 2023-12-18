package SistZP2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import SistZP2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Отпуск
 */
@Entity(name = "IISSistZP2Отпуск")
@Table(schema = "public", name = "Отпуск")
public class Otpusk {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаНачОтп")
    private Date датаначотп;

    @Column(name = "НомерДок")
    private Integer номердок;

    @Column(name = "ДатаОконОтп")
    private Date датаоконотп;

    @Column(name = "КолДней")
    private Integer колдней;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RaschetnyjList")
    @Convert("RaschetnyjList")
    @Column(name = "РасчетныйЛист", length = 16, unique = true, nullable = false)
    private UUID _raschetnyjlistid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RaschetnyjList", insertable = false, updatable = false)
    private RaschetnyjList raschetnyjlist;


    public Otpusk() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаНачОтп() {
      return датаначотп;
    }

    public void setДатаНачОтп(Date датаначотп) {
      this.датаначотп = датаначотп;
    }

    public Integer getНомерДок() {
      return номердок;
    }

    public void setНомерДок(Integer номердок) {
      this.номердок = номердок;
    }

    public Date getДатаОконОтп() {
      return датаоконотп;
    }

    public void setДатаОконОтп(Date датаоконотп) {
      this.датаоконотп = датаоконотп;
    }

    public Integer getКолДней() {
      return колдней;
    }

    public void setКолДней(Integer колдней) {
      this.колдней = колдней;
    }


}