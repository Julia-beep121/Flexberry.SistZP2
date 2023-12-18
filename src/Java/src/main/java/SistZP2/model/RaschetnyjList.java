package SistZP2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import SistZP2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: РасчетныйЛист
 */
@Entity(name = "IISSistZP2РасчетныйЛист")
@Table(schema = "public", name = "РасчетныйЛист")
public class RaschetnyjList {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ОбщаяСумма")
    private Double общаясумма;

    @Column(name = "НомерДок")
    private Integer номердок;

    @Column(name = "ДатаНачПер")
    private Date датаначпер;

    @Column(name = "ДатаОкончПер")
    private Date датаокончпер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;

    @OneToMany(mappedBy = "raschetnyjlist", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<BolnList> bolnlists;

    @OneToMany(mappedBy = "raschetnyjlist", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<UderzhIVych> uderzhivychs;

    @OneToMany(mappedBy = "raschetnyjlist", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Otpusk> otpusks;

    @OneToMany(mappedBy = "raschetnyjlist", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Premii> premiis;


    public RaschetnyjList() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getОбщаяСумма() {
      return общаясумма;
    }

    public void setОбщаяСумма(Double общаясумма) {
      this.общаясумма = общаясумма;
    }

    public Integer getНомерДок() {
      return номердок;
    }

    public void setНомерДок(Integer номердок) {
      this.номердок = номердок;
    }

    public Date getДатаНачПер() {
      return датаначпер;
    }

    public void setДатаНачПер(Date датаначпер) {
      this.датаначпер = датаначпер;
    }

    public Date getДатаОкончПер() {
      return датаокончпер;
    }

    public void setДатаОкончПер(Date датаокончпер) {
      this.датаокончпер = датаокончпер;
    }


}