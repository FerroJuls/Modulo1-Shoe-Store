package com.shoestore.shoestore.interfaceService;

import java.util.List;
import java.util.Optional;

import com.shoestore.shoestore.models.Producto;

public interface IproductoService {
    
    public String save(Producto Producto);

    public List<Producto> findAll();

    public List<Producto> filtroProducto(String filtro);

    public List<Producto> filtroProductoEstado(char estado);

    public Optional<Producto> findOne(String id);

    public int deleteForever(String id);
}
