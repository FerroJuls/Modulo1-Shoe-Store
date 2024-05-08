package com.shoestore.shoestore.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "producto")
public class producto {

    /*
     * id
     * nombre Producto
     * descripcion
     * cantidad
     * precio
     * iva
     * descuento
     * estado
     */

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idProducto", nullable = false, length = 36)
    private String idProducto;

    @Column(name = "nombreProducto", nullable = false, length = 800)
    private String nombreProducto;

    @Column(name = "descripcion", nullable = false, length = 800)
    private String descripcion;

    @Column(name = "cantidad", nullable = false, length = 50)
    private String cantidad;

    @Column(name = "precio", nullable = false, length = 50)
    private String precio;

    @Column(name = "IVA", nullable = false, length = 50)
    private String IVA;

    @Column(name = "descuento", nullable = false, length = 50)
    private String descuento;

    @Column(name = "estado", nullable = false, length = 11)
    private String estado;

    public producto() {
    }

    public producto(String idProducto, String nombreProducto, String descripcion, String cantidad, String precio,
            String iVA, String descuento, String estado) {
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
        IVA = iVA;
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

    public String getIVA() {
        return IVA;
    }

    public void setIVA(String iVA) {
        IVA = iVA;
    }

}
