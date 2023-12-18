package SistZP2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import SistZP2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: УдержИВыч
 */
@Entity(name = "IISSistZP2УдержИВыч")
@Table(schema = "public", name = "УдержИВыч")
public class UderzhIVych {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Сумма")
    private Double сумма;

    @Column(name = "Название")
    private String название;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RaschetnyjList")
    @Convert("RaschetnyjList")
    @Column(name = "РасчетныйЛист", length = 16, unique = true, nullable = false)
    private UUID _raschetnyjlistid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RaschetnyjList", insertable = false, updatable = false)
    private RaschetnyjList raschetnyjlist;


    public UderzhIVych() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getСумма() {
      return сумма;
    }

    public void setСумма(Double сумма) {
      this.сумма = сумма;
    }

    public String getНазвание() {
      return название;
    }

    public void setНазвание(String название) {
      this.название = название;
    }


}