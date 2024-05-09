package com.shoestore.shoestore.interfaceService;

import java.util.List;
import java.util.Optional;

import com.shoestore.shoestore.models.venta;


public interface IventaService {
    
    public String save(venta venta);

    public List<venta> findAll();

    public List<venta> filtroVenta(String filtro);

    public Optional<venta> findOne(String id);

    public int deleteForever(String id);
}