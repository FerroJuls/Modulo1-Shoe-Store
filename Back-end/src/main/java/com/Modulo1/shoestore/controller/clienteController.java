package com.Modulo1.shoestore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/v1/Cliente/")
@RestController
public class clienteController {
    
    @Autowired
    private IclienteService clienteService;

    @PostMapping("/")
    public ResponseEntity<Object> save(@ModelAttribute("Cliente") Cliente Cliente) {
        var listaCliente = clienteService.findAll()
                .stream().filter(cliente -> cliente.getDocumentoIdentidad()
                        .equals(cliente.getDocumentoIdentidad()));
        if (listaCliente.count() != 0) {
            return new ResponseEntity<>("El cliente ya existe", HttpStatus.BAD_REQUEST);
        }

        // verificar que el campo documento de identidad sea diferente vacio
        if (Cliente.getTipoDocumento().equals("")) {

            return new ResponseEntity<>("El tipo de documento es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Cliente.getDocumentoIdentidad().equals("")) {

            return new ResponseEntity<>("El documento de identidad es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Cliente.getNombre().equals("")) {

            return new ResponseEntity<>("El nombre es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Cliente.getApellido().equals("")) {

            return new ResponseEntity<>("El apellido es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Cliente.getTelefono().equals("")) {

            return new ResponseEntity<>("El numero de teléfono es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Cliente.getDireccion().equals("")) {

            return new ResponseEntity<>("La dirección es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Cliente.getCiudad().equals("")) {

            return new ResponseEntity<>("La ciudad es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Cliente.getEstado().equals("")) {

            return new ResponseEntity<>("El estado es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }
        
        // todo bien
        clienteService.save(Cliente);
        return new ResponseEntity<>(Cliente, HttpStatus.OK);

    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaCliente = clienteService.findAll();
        return new ResponseEntity<>(listaCliente, HttpStatus.OK);
    }

    @GetMapping("/busquedafiltro/{filtro}")
    public ResponseEntity<Object> findFiltro(@PathVariable String filtro) {
        var listaCliente = clienteService.filtroCliente(filtro);
        return new ResponseEntity<>(listaCliente, HttpStatus.OK);
    }

    @GetMapping("/busquedafiltroestado/{estado}")
    public ResponseEntity<Object> findEstado(@PathVariable char estado) {
        var listaCliente = clienteService.filtroClienteEstado(estado);
        return new ResponseEntity<>(listaCliente, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id) {
        var Cliente = clienteService.findOne(id);
        return new ResponseEntity<>(Cliente, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id) {
        var Cliente = clienteService.findOne(id).get();
        if (Cliente != null) {
            if (Cliente.getEstado().equals("ACTIVO")) {

                Cliente.setEstado("INACTIVO");
                clienteService.save(Cliente);
                return new ResponseEntity<>("Se ha deshabilitado correctamente", HttpStatus.OK);
            } else
                Cliente.setEstado("ACTIVO");
            clienteService.save(Cliente);
            return new ResponseEntity<>("Se ha habilitado correctamente", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("No se ha encontrado el registro", HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/eliminarPermanente/{id}")
    public ResponseEntity<Object> deleteForever(@PathVariable String id) {
        clienteService.deleteForever(id);
        return new ResponseEntity<>("Registro eliminado Permanentemente", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("Cliente") Cliente ClienteUpdate) {
        var Cliente = clienteService.findOne(id).get();
        if (Cliente != null) {

            Cliente.setTipoDocumento(ClienteUpdate.getTipoDocumento());
            Cliente.setDocumentoIdentidad(ClienteUpdate.getDocumentoIdentidad());
            Cliente.setNombre(ClienteUpdate.getNombre());
            Cliente.setApellido(ClienteUpdate.getApellido());
            Cliente.setTelefono(ClienteUpdate.getTelefono());
            Cliente.setDireccion(ClienteUpdate.getDireccion());
            Cliente.setCiudad(ClienteUpdate.getCiudad());
            Cliente.setEstado(ClienteUpdate.getEstado());

            clienteService.save(Cliente);
            return new ResponseEntity<>(Cliente, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error Cliente NO Encontrado", HttpStatus.BAD_REQUEST);
        }
    }



}
