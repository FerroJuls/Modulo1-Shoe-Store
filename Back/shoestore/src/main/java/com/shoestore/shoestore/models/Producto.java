package com.shoestore.shoestore.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "Producto")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idProducto", nullable = false, length = 36)
    private String idProducto;

    @Column(name = "nombreProducto", nullable = false, length = 45)
    private String nombreProducto;

    @Column(name = "Descripcion", nullable = false, length = 45)
    private String Descripcion;

    @Column(name = "Cantidad", nullable = false, length = 100)
    private String Cantidad;

    @Column(name = "Precio", nullable = false, precision = 10)
    private String Precio;

    @Column(name = "porcentajeIva", nullable = false, length = 2)
    private String porcentajeIva;

    @Column(name = "porcentajeIescuento", nullable = false, length = 2)
    private String porcentajeDescuento;

    @Column(name = "Estado", nullable = false, length = 8)
    private String Estado;

    public Producto() {
    }

    public Producto(String idProducto, String nombreProducto, String descripcion, String cantidad, String precio,
            String porcentajeIva, String porcentajeDescuento, String estado) {
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto;
        Descripcion = descripcion;
        Cantidad = cantidad;
        Precio = precio;
        this.porcentajeIva = porcentajeIva;
        this.porcentajeDescuento = porcentajeDescuento;
        Estado = estado;
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
        return Descripcion;
    }

    public void setDescripcion(String descripcion) {
        Descripcion = descripcion;
    }

    public String getCantidad() {
        return Cantidad;
    }

    public void setCantidad(String cantidad) {
        Cantidad = cantidad;
    }

    public String getPrecio() {
        return Precio;
    }

    public void setPrecio(String precio) {
        Precio = precio;
    }

    public String getPorcentajeIva() {
        return porcentajeIva;
    }

    public void setPorcentajeIva(String porcentajeIva) {
        this.porcentajeIva = porcentajeIva;
    }

    public String getPorcentajeDescuento() {
        return porcentajeDescuento;
    }

    public void setPorcentajeDescuento(String porcentajeDescuento) {
        this.porcentajeDescuento = porcentajeDescuento;
    }

    public String getEstado() {
        return Estado;
    }

    public void setEstado(String estado) {
        Estado = estado;
    }

    
}
