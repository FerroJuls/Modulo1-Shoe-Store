package com.shoestore.shoestore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shoestore.shoestore.interfaceService.IproveedorService;
import com.shoestore.shoestore.interfaces.Iproveedor;
import com.shoestore.shoestore.models.proveedor;

@Service
public class proveedorService implements IproveedorService{

    @Autowired
    private Iproveedor data;

    @Override
    public String save(proveedor proveedor) {
        data.save(proveedor);
        return proveedor.getIdProveedor();
    }

    @Override
    public List<proveedor> findAll(){
        List<proveedor> listaProveedor =(List<proveedor>) data.findAll();
        return listaProveedor;
    }

    @Override
    public List<proveedor> filtroProveedor(String filtro){
        List<proveedor> listaProveedor = data.filtroProveedor(filtro);
        return listaProveedor;
    }

    @Override
    public List<proveedor> filtroProveedorRazonSocial(String razonSocial){
        List<proveedor> listaProveedor = data.filtroProveedorRazonSocial(razonSocial);
        return listaProveedor;
    }

    @Override
    public List<proveedor> filtroProveedorEstado(String estado){
        List<proveedor> listaProveedor = data.filtroProveedorEstado(estado);
        return listaProveedor;
    }

    @Override
    public Optional<proveedor> findOne(String id){
        Optional<proveedor> proveedor = data.findById(id);
        return proveedor;
    }

    @Override
    public int deleteForever(String id) {
        data.deleteById(id);
        return 1;
    }
}