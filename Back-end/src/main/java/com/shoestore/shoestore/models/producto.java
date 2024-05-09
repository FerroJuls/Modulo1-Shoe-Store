package com.shoestore.shoestore.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "producto")
public class producto {


    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idProducto", nullable = false, length = 36)
    private String idProducto;

    @Column(name = "nombreProducto", nullable = false, length = 45)
    private String nombreProducto;

    @Column(name = "descripcion", nullable = false, length = 45)
    private String descripcion;

    @Column(name = "cantidad", nullable = false, length = 1000)
    private String cantidad;

    @Column(name = "precio", nullable = false, length = 50)
    private String precio;

    @Column(name = "iva", nullable = false, length = 2)
    private String iva;

    @Column(name = "descuento", nullable = false, length = 2)
    private String descuento;

    @Column(name = "estado", nullable = false, length = 9)
    private String estado;

    public producto() {
    }

    public producto(String idProducto, String nombreProducto, String descripcion, String cantidad, String precio,
            String iva, String descuento, String estado) {
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
        this.iva = iva;
        this.descuento = descuento;
        this.estado = estado;
    }

    public String getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(String idProducto) {
        this.idProducto = idProducto;
    }

    public String getNombreProducto() {
        return nombreProducto;
    }

    public void setNombreProducto(String nombreProducto) {
        this.nombreProducto = nombreProducto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getCantidad() {
        return cantidad;
    }

    public void setCantidad(String cantidad) {
        this.cantidad = cantidad;
    }

    public String getPrecio() {
        return precio;
    }

    public void setPrecio(String precio) {
        this.precio = precio;
    }

    public String getIva() {
        return iva;
    }

    public void setIva(String iva) {
        this.iva = iva;
    }

    public String getDescuento() {
        return descuento;
    }

    public void setDescuento(String descuento) {
        this.descuento = descuento;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    
    
}
