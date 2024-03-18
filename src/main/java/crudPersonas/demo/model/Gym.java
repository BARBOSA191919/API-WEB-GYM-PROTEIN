package crudPersonas.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name="gym")
public class Gym {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String correo;
    private String contrasena;

    public Gym() {
    }

    public Gym(String correo, String contrasena, long id) {
        this.correo = correo;
        this.contrasena = contrasena;
        this.id=id;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }
}
