package com.shoestore.shoestore.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.shoestore.shoestore.models.cliente;

@Repository
public interface Icliente extends CrudRepository<cliente, String> {

    @Query("SELECT c FROM cliente c WHERE c.nombre LIKE %?1% OR c.ciudad LIKE %?1%")
    List<cliente> filtroCliente(String filtro);

    @Query("SELECT c FROM cliente c WHERE c.estado LIKE ?1 ")
    List<cliente> filtroEstado (String estado);
    
}
