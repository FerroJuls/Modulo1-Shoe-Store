package com.shoestore.shoestore.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "Cliente")
public class Cliente {
    /**
     * id (UIID autogenerado)
     * - tipo documento (obligatorio)
     * - documento de identidad (obligatorio)
     * - nombre (obligatorio)
     * - apellido (obligatorio)
     * - teléfono (obligatorio)
     * - direccion (obligatorio)
     * - ciudad (obligatorio)
     * - correo (obligatorio)
     * - Estado (ACTIVO, INACTIVO)
     */

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idCliente", nullable = false, length = 36)
    private String idCliente;
 
    @Column(name = "tipoDocumento", nullable = false, length = 2)
    private String tipoDocumento;
 
    @Column(name = "documentoIdentidad", nullable = false, length = 10)
    private String documentoIdentidad;

    @Column(name = "Nombre", nullable = false, length = 45)
    private String Nombre;

    @Column(name = "Apellido", nullable = false, length = 45)
    private String Apellido;

    @Column(name = "Telefono", nullable = false, length = 13)
    private String Telefono;

    @Column(name = "Direccion", nullable = false, length = 45)
    private String Direccion;

    @Column(name = "Ciudad", nullable = false, length = 45)
    private String Ciudad;

    @Column(name = "Correo", nullable = false, length = 100)
    private String Correo;

    @Column(name = "Estado", nullable = false, length = 8)
    private String Estado;

    public Cliente() {
    }

    public Cliente(String idCliente, String tipoDocumento, String documentoIdentidad, String nombre, String apellido,
            String telefono, String direccion, String ciudad, String correo, String estado) {
        this.idCliente = idCliente;
        this.tipoDocumento = tipoDocumento;
        this.documentoIdentidad = documentoIdentidad;
        Nombre = nombre;
        Apellido = apellido;
        Telefono = telefono;
        Direccion = direccion;
        Ciudad = ciudad;
        Correo = correo;
        Estado = estado;
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

    public String getDocumentoIdentidad() {
        return documentoIdentidad;
    }

    public void setDocumentoIdentidad(String documentoIdentidad) {
        this.documentoIdentidad = documentoIdentidad;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String nombre) {
        Nombre = nombre;
    }

    public String getApellido() {
        return Apellido;
    }

    public void setApellido(String apellido) {
        Apellido = apellido;
    }

    public String getTelefono() {
        return Telefono;
    }

    public void setTelefono(String telefono) {
        Telefono = telefono;
    }

    public String getDireccion() {
        return Direccion;
    }

    public void setDireccion(String direccion) {
        Direccion = direccion;
    }

    public String getCiudad() {
        return Ciudad;
    }

    public void setCiudad(String ciudad) {
        Ciudad = ciudad;
    }

    public String getCorreo() {
        return Correo;
    }

    public void setCorreo(String correo) {
        Correo = correo;
    }

    public String getEstado() {
        return Estado;
    }

    public void setEstado(String estado) {
        Estado = estado;
    }

    

    
    
}
