package com.shoestore.shoestore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shoestore.shoestore.interfaceService.IventaService;
import com.shoestore.shoestore.interfaces.Iventa;
import com.shoestore.shoestore.models.venta;

@Service
public class ventaService implements IventaService{
    
    @Autowired
    private Iventa data;

    @Override
    public String save(venta venta) {
        data.save(venta);
        return venta.getIdVenta();
    }

    @Override
    public List<venta> findAll() {
        List<venta> listaVenta = (List<venta>) data.findAll();
        return listaVenta;
    }

    @Override
    public List<venta> filtroVenta(String filtro) {
        List<venta> listaVenta = data.filtroVenta(filtro);
        return listaVenta;
    }

    @Override
    public List<venta>filtroEstado(String estado) {
        List<venta> listaIngreso = data.filtroEstado(estado);
        return listaIngreso;
    }

    @Override
    public Optional<venta> findOne(String id){
        Optional<venta> venta = data.findById(id);
        return venta;
    }

    @Override
    public int deleteForever(String id) {
        data.deleteById(id);
        return 1;
    }
}