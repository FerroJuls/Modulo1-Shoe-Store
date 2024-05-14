package com.shoestore.shoestore.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.shoestore.shoestore.models.proveedor;

@Repository
public interface Iproveedor extends CrudRepository<proveedor, String> {
    
    @Query("SELECT pr FROM proveedor pr WHERE pr.nit LIKE %?1%")
    List<proveedor> filtroProveedor(String filtro);
    
    @Query("SELECT pr FROM proveedor pr WHERE pr.razonSocial LIKE %?1%")
    List<proveedor> filtroProveedorRazonSocial(String razonSocial);
    
    @Query("SELECT pr FROM proveedor pr WHERE pr.estado LIKE ?1")
    List<proveedor> filtroProveedorEstado(String estado);
}