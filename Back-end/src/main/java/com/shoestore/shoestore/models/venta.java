package com.shoestore.shoestore.models;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity(name = "venta")
public class venta {
    


     @Id
     @GeneratedValue(strategy = GenerationType.UUID)
     @Column(name = "idVenta", nullable = false, length = 36)
     private String idVenta;

     @ManyToOne
     @JoinColumn(name = "idCliente", nullable = false)
     private cliente cliente;

     @Column(name = "total", nullable = false,length = 45)
     private String total;

     @Column(name = "fechaVenta", nullable = false,length = 10)
     private Date fechaVenta;

     @Column(name = "estado", nullable = false,length = 16)
     private String estado;

    public venta() {
    }

    public venta(String idVenta, com.shoestore.shoestore.models.cliente cliente, String total, Date fechaVenta,
            String estado) {
        this.idVenta = idVenta;
        this.cliente = cliente;
        this.total = total;
        this.fechaVenta = fechaVenta;
        this.estado = estado;
    }

    public String getIdVenta() {
        return idVenta;
    }

    public void setIdVenta(String idVenta) {
        this.idVenta = idVenta;
    }

    public cliente getCliente() {
        return cliente;
    }

    public void setCliente(cliente cliente) {
        this.cliente = cliente;
    }

    public String getTotal() {
        return total;
    }

    public void setTotal(String total) {
        this.total = total;
    }

    public Date getFechaVenta() {
        return fechaVenta;
    }

    public void setFechaVenta(Date fechaVenta) {
        this.fechaVenta = fechaVenta;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    
    

}