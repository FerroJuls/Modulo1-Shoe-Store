package com.shoestore.shoestore.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "cliente")
public class cliente {
    
    /*id
     * tipo de identificacion
     * identificacion
     * nombre
     * apellido
     * telefono
     * direccion
     * ciudad
     * estado
     */

     @Id
     @GeneratedValue(strategy = GenerationType.UUID)
     @Column(name = "idCliente", nullable = false, length = 36)
     private String idCliente;

     @Column(name = "tipoDocumento" , nullable = false, length = 2)
     private String tipoDocumento;

     @Column(name = "numeroDocumento", nullable = false, length = 10)
     private String numeroDocumento;

     @Column(name = "nombre", nullable = false, length = 45)
     private String nombre;

     @Column(name = "apellido", nullable = false, length = 45)
     private String apellido;

     @Column(name = "telefono", nullable = false, length = 13)
     private String telefono;

     @Column(name = "direccion", nullable = false, length = 45)
     private String direccion;

     @Column(name = "ciudad", nullable = false, length = 45)
     private String ciudad;

     @Column(name = "correo", nullable = false, length = 100)
     private String correo;

     @Column(name = "estado", nullable = false, length = 9)
     private String estado;

    public cliente() {
    }

    public cliente(String idCliente, String tipoDocumento, String numeroDocumento, String nombre, String apellido,
            String telefono, String direccion, String ciudad, String correo, String estado) {
        this.idCliente = idCliente;
        this.tipoDocumento = tipoDocumento;
        this.numeroDocumento = numeroDocumento;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.correo = correo;
        this.estado = estado;
    }

    public String getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(String idCliente) {
        this.idCliente = idCliente;
    }

    public String getTipoDocumento() {
        return tipoDocumento;
    }

    public void setTipoDocumento(String tipoDocumento) {
        this.tipoDocumento = tipoDocumento;
    }

    public String getNumeroDocumento() {
        return numeroDocumento;
    }

    public void setNumeroDocumento(String numeroDocumento) {
        this.numeroDocumento = numeroDocumento;
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

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
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

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    
     
}
