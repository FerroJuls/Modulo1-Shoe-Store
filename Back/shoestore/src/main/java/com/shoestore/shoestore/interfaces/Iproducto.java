package com.shoestore.shoestore.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.shoestore.shoestore.models.Producto;

@Repository
public interface Iproducto extends CrudRepository< Producto , String> {

    /*
     * idProducto
     * nombreProducto
     * Descripcion
     * Cantidad
     * Precio
     * porcentajeIva
     * porcentajeIescuento
     * Estado
     */

    @Query("SELECT m FROM Producto m WHERE m.nombreProducto LIKE %?1%")
    List<Producto> filtroProducto(String filtro);

    @Query("SELECT m FROM Producto m WHERE m.Estado LIKE %?1%")
    List<Producto> filtroProductoEstado(char estado);
}
