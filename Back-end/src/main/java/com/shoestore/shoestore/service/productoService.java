package com.shoestore.shoestore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shoestore.shoestore.interfaceService.IproductoService;
import com.shoestore.shoestore.interfaces.Iproducto;
import com.shoestore.shoestore.models.producto;

@Service
public class productoService implements IproductoService {

    @Autowired
    private Iproducto data;

    @Override
    public String save(producto producto) {
        data.save(producto);
        return producto.getIdProducto();
    }

    @Override
    public List<producto> findAll() {
        List<producto> listaProducto = (List<producto>) data.findAll();
        return listaProducto;
    }

    @Override
    public List<producto> filtroProducto(String filtro) {
        List<producto> listaProducto = data.filtroProducto(filtro);
        return listaProducto;
    }

    @Override
    public Optional<producto> findOne(String id) {
        Optional<producto> producto = data.findById(id);
        return producto;
    }

    @Override
    public int deleteForever(String id) {
        data.deleteById(id);
        return 1;
    }
}
