package com.shoestore.shoestore.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.shoestore.shoestore.models.producto;

@Repository
public interface Iproducto extends CrudRepository<producto, String> {
    
    @Query("SELECT p FROM producto p WHERE p.nombreProducto LIKE %?1%")
    List<producto> filtroProducto(String filtro);

    @Query("SELECT p FROM producto p WHERE p.estado LIKE %?1% ")
    List<producto> filtroEstado (String estado);
}
