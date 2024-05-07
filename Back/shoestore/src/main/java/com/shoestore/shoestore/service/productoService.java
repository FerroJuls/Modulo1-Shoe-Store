package com.shoestore.shoestore.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shoestore.shoestore.interfaceService.IproductoService;
import com.shoestore.shoestore.interfaces.Iproducto;
import com.shoestore.shoestore.models.Producto;

@Service

public class productoService implements IproductoService {
    
    @Autowired
    private Iproducto data;

    @SuppressWarnings("null")
    @Override
    public String save(Producto Producto) {
        data.save(Producto);
        return Producto.getIdProducto();
    }

    @Override
    public List<Producto> findAll() {
        List<Producto> listaProducto = (List<Producto>) data.findAll();
        return listaProducto;
    }

    @Override
    public List<Producto> filtroProducto(String filtro) {
        List<Producto> listaProducto =data.filtroProducto(filtro);
        return listaProducto;
    }

    @Override
    public List<Producto> filtroProductoEstado(char estado) {
        List<Producto> listaProducto =data.filtroProductoEstado(estado);
        return listaProducto;
    }

    @Override
    public Optional<Producto> findOne(String id) {
        @SuppressWarnings("null")
        Optional<Producto> Producto = data.findById(id);
        return Producto;
    }

    @SuppressWarnings("null")
    @Override
    public int deleteForever(String id) {
        data.deleteById(id);
        return 1;
    }
}
