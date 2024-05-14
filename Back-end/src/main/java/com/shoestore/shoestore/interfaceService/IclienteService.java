package com.shoestore.shoestore.interfaceService;

import java.util.List;
import java.util.Optional;

import com.shoestore.shoestore.models.cliente;

public interface IclienteService {
    
    public String save(cliente cliente);

    public List<cliente> findAll();

    public List<cliente> filtroCliente(String filtro);

    public List<cliente> filtroCiudad(String ciudad);

    public Optional<cliente> findOne(String id);

    public List<cliente> filtroEstado (String estado);

    public int deleteForever(String id);
}
