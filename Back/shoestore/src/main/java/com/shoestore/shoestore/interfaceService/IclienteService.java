package com.shoestore.shoestore.interfaceService;

import java.util.List;
import java.util.Optional;

import com.shoestore.shoestore.models.Cliente;

public interface IclienteService {

    public String save(Cliente Cliente);

    public List<Cliente> findAll();

    public List<Cliente> filtroCliente(String filtro);

    public List<Cliente> filtroClienteEstado(char estado);

    public Optional<Cliente> findOne(String id);

    public int deleteForever(String id);
}
