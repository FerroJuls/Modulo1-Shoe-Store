package com.shoestore.shoestore.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity(name = "detalle")
public class detalle {
    
    
     @Id
     @GeneratedValue(strategy = GenerationType.UUID)
     @Column(name = "idDetalle", nullable = false,length = 36)
     private String idDetalle;

    @ManyToOne
    @JoinColumn(name = "idVenta")
    private venta venta;

    @ManyToOne
    @JoinColumn(name = "idProducto")
    private producto producto;

    @Column(name = "cantidad", nullable = false,length = 45)
    private String cantidad;

    @Column(name = "precio", nullable = false,length = 45)
    private String precio;

    @Column(name = "descuento", nullable = false, length = 45)
    private String descuento;

    @Column(name = "subTotal", nullable = false, length = 45)
    private String subTotal;

    public detalle() {
    }

    public detalle(String idDetalle, com.shoestore.shoestore.models.venta venta,
            com.shoestore.shoestore.models.producto producto, String cantidad, String precio, String descuento,
            String subTotal) {
        this.idDetalle = idDetalle;
        this.venta = venta;
        this.producto = producto;
        this.cantidad = cantidad;
        this.precio = precio;
        this.descuento = descuento;
        this.subTotal = subTotal;
    }

    public String getIdDetalle() {
        return idDetalle;
    }

    public void setIdDetalle(String idDetalle) {
        this.idDetalle = idDetalle;
    }

    public venta getVenta() {
        return venta;
    }

    public void setVenta(venta venta) {
        this.venta = venta;
    }

    public producto getProducto() {
        return producto;
    }

    public void setProducto(producto producto) {
        this.producto = producto;
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

    public String getSubTotal() {
        return subTotal;
    }

    public void setSubTotal(String subTotal) {
        this.subTotal = subTotal;
    }

    

    

}
