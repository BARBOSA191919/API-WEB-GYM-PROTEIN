package crudPersonas.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name="diasemana")
public class DiaSemana {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String nombre;

    public DiaSemana() {
    }

    public DiaSemana(int id, String nombre) {
        this.id = id;
        this.nombre = nombre;
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
}
