package crudPersonas.demo.model;

// Importa las anotaciones de JPA (Java Persistence API) necesarias para la persistencia de objetos en la base de datos
import jakarta.persistence.*;

// Anota la clase como una entidad JPA, mapeada a la tabla "personas" en la base de datos
@Entity
@Table(name="personas")
public class Personas {
    // Anota el campo 'id' como la clave primaria de la entidad y especifica la estrategia de generación automática de valores
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    // Declaración de otros campos de la entidad

    private int id;
    private String nombre;
    private String apellido;
    private String email;
    private String direccion;
    private int documento;
    private int edad;
    private String contra;
    private String tipodocumento;
    private String fecha;
    private String sexo;

    // Constructor por defecto
    public Personas() {
    }
    // Constructor con parámetros para inicializar todos los campos de la entidad

    public Personas(int id, String nombre, String apellido, String email, String direccion, int documento, int edad,String contra,String tipodocumento,String fecha, String sexo) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.direccion = direccion;
        this.documento = documento;
        this.tipodocumento = tipodocumento;
        this.edad = edad;
        this.contra = contra;
        this.fecha = fecha;
        this.sexo = sexo;

    }
    // Métodos getter y setter para acceder y modificar los campos de la entidad

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public int getDocumento() {
        return documento;
    }

    public void setDocumento(int documento) {
        this.documento = documento;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContra() {
        return contra;
    }

    public void setContra(String contra) {
        this.contra = contra;
    }

    public String getTipodocumento() {
        return tipodocumento;
    }

    public void setTipodocumento(String tipodocumento) {
        this.tipodocumento = tipodocumento;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }
}


