package crudPersonas.demo.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "registro_actividad")
public class RegistroActividad {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int idEjercicio;

    private String estado;

    private int idDiaSemana;
    private Date fecha;
    private String tiempoTotal;


    public RegistroActividad() {
    }

    public RegistroActividad(int id, int idEjercicio, String estado, int idDiaSemana, Date fecha, String tiempoTotal) {
        this.id = id;
        this.idEjercicio = idEjercicio;
        this.estado = estado;
        this.idDiaSemana = idDiaSemana;
        this.fecha = fecha;
        this.tiempoTotal = tiempoTotal;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdEjercicio() {
        return idEjercicio;
    }

    public void setIdEjercicio(int idEjercicio) {
        this.idEjercicio = idEjercicio;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public int getIdDiaSemana() {
        return idDiaSemana;
    }

    public void setIdDiaSemana(int idDiaSemana) {
        this.idDiaSemana = idDiaSemana;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getTiempoTotal() {
        return tiempoTotal;
    }

    public void setTiempoTotal(String tiempoTotal) {
        this.tiempoTotal = tiempoTotal;
    }
}
