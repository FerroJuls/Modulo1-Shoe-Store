package com.shoestore.shoestore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shoestore.shoestore.interfaceService.IdetalleService;
import com.shoestore.shoestore.interfaces.Idetalle;
import com.shoestore.shoestore.models.detalle;

@Service
public class detalleService implements IdetalleService{
   
    @Autowired
    private Idetalle data;

    @Override
    public String save(detalle detalle){
        data.save(detalle);
        return detalle.getIdDetalle();
    }

    @Override
    public List <detalle> findAll() {
        List<detalle> listaDetalle = (List<detalle>)data.findAll();
        return listaDetalle;
    }

    @Override
    public Optional<detalle> findOne(String id) {
        Optional<detalle> detalle = data.findById(id);
        return detalle;
    }

    @Override
    public int deleteForever(String id) {
        data.deleteById(id);
        return 1;
    }
}
