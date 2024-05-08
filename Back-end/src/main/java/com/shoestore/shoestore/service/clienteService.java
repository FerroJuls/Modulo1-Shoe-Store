package com.shoestore.shoestore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shoestore.shoestore.interfaceService.IclienteService;
import com.shoestore.shoestore.interfaces.Icliente;
import com.shoestore.shoestore.models.cliente;

@Service
public class clienteService implements IclienteService {

    @Autowired
    private Icliente data;

    @Override
    public String save(cliente cliente) {
        data.save(cliente);
        return cliente.getIdCliente();
    }

    @Override
    public List<cliente> findAll() {
        List<cliente> listaCliente = (List<cliente>) data.findAll();
        return listaCliente;
    }

    @Override
    public List<cliente> filtroCliente(String filtro) {
        List<cliente> listaCliente = data.filtroCliente(filtro);
        return listaCliente;
    }

    @Override
    public Optional<cliente> findOne(String id) {
        Optional<cliente> cliente = data.findById(id);
        return cliente;
    }

    @Override
    public int deleteForever(String id) {
        data.deleteById(id);
        return 1;
    }
}
