package com.shoestore.shoestore.interfaceService;

import java.util.List;
import java.util.Optional;

import com.shoestore.shoestore.models.detalle;

public interface IdetalleService {
    
    public String save(detalle detalle);

    public List<detalle> findAll();

    public Optional<detalle> findOne(String id);

    public int deleteForever(String id);
}
