package com.shoestore.shoestore.interfaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.shoestore.shoestore.models.detalle;

@Repository
public interface Idetalle extends CrudRepository<detalle, String>{
    
}
