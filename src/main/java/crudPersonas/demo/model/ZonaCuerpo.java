package crudPersonas.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "zona_cuerpo")
public class ZonaCuerpo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String nombre;

    private String ejercicios;


    public ZonaCuerpo() {
    }

    public ZonaCuerpo(int id, String nombre, String ejercicios) {
        this.id = id;
        this.nombre = nombre;
        this.ejercicios = ejercicios;
    }

    public int getId() {return id;}

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEjercicios() {
        return ejercicios;
    }

    public void setEjercicios(String ejercicios) {
        this.ejercicios = ejercicios;
    }
}

