package com.shoestore.shoestore.models;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class proveedor {

     @Id
     @GeneratedValue(strategy = GenerationType.UUID)
     @Column(name = "idProveedor", nullable = false, length = 36)
     private String idProveedor;

     @Column(name = "nit", nullable = false, length = 36)
     private String nit;

     @Column(name = "razonSocial", nullable = false, length = 45)
     private String razonSocial;

     @Column(name = "nombre", nullable = false,length = 45)
     private String nombre;

     @Column(name = "cargo", nullable = false, length = 45)
     private String cargo;

     @Column(name = "telefono", nullable = false, length = 15)
     private String telefono;

     @Column(name = "direccion", nullable = false, length = 36)
     private String direccion;

     @Column(name = "estado", nullable = false,length = 10)
     private String estado;

    public proveedor() {
    }

    public proveedor(String idProveedor, String nit, String razonSocial, String nombre, String cargo, String telefono,
            String direccion, String estado) {
        this.idProveedor = idProveedor;
        this.nit = nit;
        this.razonSocial = razonSocial;
        this.nombre = nombre;
        this.cargo = cargo;
        this.telefono = telefono;
        this.direccion = direccion;
        this.estado = estado;
    }

    public String getIdProveedor() {
        return idProveedor;
    }

    public void setIdProveedor(String idProveedor) {
        this.idProveedor = idProveedor;
    }

    public String getNit() {
        return nit;
    }

    public void setNit(String nit) {
        this.nit = nit;
    }

    public String getRazonSocial() {
        return razonSocial;
    }

    public void setRazonSocial(String razonSocial) {
        this.razonSocial = razonSocial;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
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

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    

     
}
