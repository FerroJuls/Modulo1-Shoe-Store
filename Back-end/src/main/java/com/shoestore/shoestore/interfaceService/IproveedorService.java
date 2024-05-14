package com.shoestore.shoestore.interfaceService;

import java.util.List;
import java.util.Optional;

import com.shoestore.shoestore.models.proveedor;

public interface IproveedorService {
    
    public String save(proveedor proveedor);

    public List<proveedor> findAll();

    public List<proveedor> filtroProveedor(String filtro);

    public List<proveedor> filtroProveedorRazonSocial(String razonSocial);

    public List<proveedor> filtroProveedorEstado(String estado);

    public Optional<proveedor> findOne(String id);

    public int deleteForever(String id);
}
