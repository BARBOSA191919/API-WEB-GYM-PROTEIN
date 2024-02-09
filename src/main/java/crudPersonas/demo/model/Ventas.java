package crudPersonas.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name="ventas")
public class Ventas {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String nombres;

    private String telefono;

    private int codigopostal;

    private int documento;

    private String tipodocumento;

    private String direccion;

    private String ciudad;

    private String correo;

    private String tipopago;

    private String tipoproducto;

    private int cantidad;

    private float precio;

    public Ventas() {
    }

    public Ventas(int id, String nombres, String telefono, int codigopostal, int documento, String tipodocumento, String direccion, String ciudad, String correo, String tipopago, String tipoproducto, int cantidad, float precio) {
        this.id = id;
        this.nombres = nombres;
        this.telefono = telefono;
        this.codigopostal = codigopostal;
        this.documento = documento;
        this.tipodocumento = tipodocumento;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.correo = correo;
        this.tipopago = tipopago;
        this.tipoproducto = tipoproducto;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public int getCodigopostal() {
        return codigopostal;
    }

    public void setCodigopostal(int codigopostal) {
        this.codigopostal = codigopostal;
    }

    public int getDocumento() {
        return documento;
    }

    public void setDocumento(int documento) {
        this.documento = documento;
    }

    public String getTipodocumento() {
        return tipodocumento;
    }

    public void setTipodocumento(String tipodocumento) {
        this.tipodocumento = tipodocumento;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getTipopago() {
        return tipopago;
    }

    public void setTipopago(String tipopago) {
        this.tipopago = tipopago;
    }

    public String getTipoproducto() {
        return tipoproducto;
    }

    public void setTipoproducto(String tipoproducto) {
        this.tipoproducto = tipoproducto;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }
}


