package com.shoestore.shoestore.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shoestore.shoestore.interfaceService.IclienteService;
import com.shoestore.shoestore.interfaces.Icliente;
import com.shoestore.shoestore.models.Cliente;

@Service

public class clienteService implements IclienteService{
    
    @Autowired
    private Icliente data;

    @SuppressWarnings("null")
    @Override
    public String save(Cliente Cliente) {
        data.save(Cliente);
        return Cliente.getIdCliente();
    }

    @Override
    public List<Cliente> findAll() {
        List<Cliente> listaCliente = (List<Cliente>) data.findAll();
        return listaCliente;
    }

    @Override
    public List<Cliente> filtroCliente(String filtro) {
        List<Cliente> listaCliente =data.filtroCliente(filtro);
        return listaCliente;
    }

    @Override
    public List<Cliente> filtroClienteEstado(char estado) {
        List<Cliente> listaCliente =data.filtroClienteEstado(estado);
        return listaCliente;
    }

    @Override
    public Optional<Cliente> findOne(String id) {
        @SuppressWarnings("null")
        Optional<Cliente> Cliente = data.findById(id);
        return Cliente;
    }

    @SuppressWarnings("null")
    @Override
    public int deleteForever(String id) {
        data.deleteById(id);
        return 1;
    }
}
