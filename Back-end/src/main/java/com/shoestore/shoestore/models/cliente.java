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

     @Column(name = "tipoDocumento" , nullable = false, length = 10)
     private String tipoDocumento;

     @Column(name = "numeroDocumento", nullable = false, length = 10)
     private String numeroDocumento;

     @Column(name = "nombreCliente", nullable = false, length = 45)
     private String nombreCliente;

     @Column(name = "apellidoCliente", nullable = false, length = 45)
     private String apellidoCliente;

     @Column(name = "telefono", nullable = false, length = 13)
     private String telefono;

     @Column(name = "direccion", nullable = false, length = 45)
     private String direccion;

     @Column(name = "ciudad", nullable = false, length = 45)
     private String ciudad;

     @Column(name = "estado", nullable = false, length = 11)
     private String estado;

    public cliente() {
    }

    public cliente(String idCliente, String tipoDocumento, String numeroDocumento, String nombreCliente,
            String apellidoCliente, String telefono, String direccion, String ciudad, String estado) {
        this.idCliente = idCliente;
        this.tipoDocumento = tipoDocumento;
        this.numeroDocumento = numeroDocumento;
        this.nombreCliente = nombreCliente;
        this.apellidoCliente = apellidoCliente;
        this.telefono = telefono;
        this.direccion = direccion;
        this.ciudad = ciudad;
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

    public String getNombreCliente() {
        return nombreCliente;
    }

    public void setNombreCliente(String nombreCliente) {
        this.nombreCliente = nombreCliente;
    }

    public String getApellidoCliente() {
        return apellidoCliente;
    }

    public void setApellidoCliente(String apellidoCliente) {
        this.apellidoCliente = apellidoCliente;
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

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

     
}
