package com.shoestore.shoestore.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.shoestore.shoestore.models.Cliente;

@Repository
public interface Icliente extends CrudRepository<Cliente, String> {

    /**
     * id (UIID autogenerado)
     * - tipo documento (obligatorio)
     * - documento de identidad (obligatorio)
     * - nombre (obligatorio)
     * - apellido (obligatorio)
     * - teléfono (obligatorio)
     * - direccion (obligatorio)
     * - ciudad (obligatorio)
     * - Estado (ACTIVO, INACTIVO)
     */

    @Query("SELECT c FROM Cliente c WHERE c.Nombre LIKE %?1% OR c.Ciudad LIKE %?1%")
    List<Cliente> filtroCliente(String filtro);

    @Query("SELECT c FROM Cliente c WHERE c.Estado LIKE %?1%")
    List<Cliente> filtroClienteEstado(char estado);
}
