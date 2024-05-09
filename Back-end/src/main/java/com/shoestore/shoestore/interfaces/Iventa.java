package com.shoestore.shoestore.interfaces;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.shoestore.shoestore.models.venta;


@Repository
public interface Iventa extends CrudRepository<venta, String>{

    @Query("SELECT v FROM venta v WHERE v.estado LIKE ?1 ")
    List<venta> filtroEstado (String estado);

}