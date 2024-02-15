package crudPersonas.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "ejercicio")
public class Ejercicios {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String nombre;

    private int idZonaCuerpo;

    private int  idDiaSemana;

    private String descripcion;

    public Ejercicios(){
    }

    public Ejercicios(int id, String nombre, int idZonaCuerpo, int idDiaSemana, String descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.idZonaCuerpo = idZonaCuerpo;
        this.idDiaSemana = idDiaSemana;
        this.descripcion = descripcion;
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

    public int getIdZonaCuerpo() {
        return idZonaCuerpo;
    }

    public void setIdZonaCuerpo(int idZonaCuerpo) {
        this.idZonaCuerpo = idZonaCuerpo;
    }

    public int getIdDiaSemana() {
        return idDiaSemana;
    }

    public void setIdDiaSemana(int idDiaSemana) {
        this.idDiaSemana = idDiaSemana;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
