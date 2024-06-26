package com.shoestore.shoestore.Controller;

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

import com.shoestore.shoestore.interfaceService.IclienteService;
import com.shoestore.shoestore.models.cliente;

@RequestMapping("/api/v1/cliente")
@RestController
public class clienteController {

    @Autowired
    private IclienteService clienteService;

    @PostMapping("/")
    public ResponseEntity<Object> save(@ModelAttribute("cliente") cliente cliente) {
        var listaCliente = clienteService.findAll()
                .stream().filter(Cliente -> Cliente.getNumeroDocumento()
                        .equals(cliente.getNumeroDocumento()));

        if (listaCliente.count() != 0) {
            return new ResponseEntity<>("Este cliente ya existe", HttpStatus.BAD_REQUEST);
        }

        if (cliente.getTipoDocumento().equals("")) {

            return new ResponseEntity<>("El campo tipo de documento es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (cliente.getNumeroDocumento().equals("")) {

            return new ResponseEntity<>("El campo documento es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (cliente.getNombre().equals("")) {

            return new ResponseEntity<>("El campo nombre es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (cliente.getApellido().equals("")) {

            return new ResponseEntity<>("El campo apellido es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (cliente.getTelefono().equals("")) {

            return new ResponseEntity<>("El campo número de teléfono es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (cliente.getDireccion().equals("")) {

            return new ResponseEntity<>("El campo dirección es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (cliente.getCiudad().equals("")) {

            return new ResponseEntity<>("El campo ciudad es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (cliente.getCorreo().equals("")) {

            return new ResponseEntity<>("El campo correo es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (cliente.getEstado().equals("")) {

            return new ResponseEntity<>("El campo estado es obligatorio", HttpStatus.BAD_REQUEST);
        }

        clienteService.save(cliente);
        return new ResponseEntity<>(cliente, HttpStatus.OK);
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

    @GetMapping("/busquedafiltrociudad/{ciudad}")
    public ResponseEntity<Object> findFiltroCiudad(@PathVariable String ciudad) {
        var listaCliente = clienteService.filtroCiudad(ciudad);
        return new ResponseEntity<>(listaCliente, HttpStatus.OK);
    }

    @GetMapping("/busquedaEstado/{estado}")
    public ResponseEntity<Object> findEstado(@PathVariable String estado){
        var listaCliente = clienteService.filtroEstado(estado);
        return new ResponseEntity<>(listaCliente, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id) {
        var cliente = clienteService.findOne(id);
        return new ResponseEntity<>(cliente, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id) {
        var cliente = clienteService.findOne(id).get();

        if (cliente != null) {
            if (cliente.getEstado().equals("Activo")) {

                cliente.setEstado("Inactivo");
                clienteService.save(cliente);
                return new ResponseEntity<>("Se ha inactivado correctamente", HttpStatus.OK);
            } else
                cliente.setEstado("Activo");
            clienteService.save(cliente);
            return new ResponseEntity<>("Se ha activado correctamente", HttpStatus.OK);
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
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("cliente") cliente clienteUpdate) {
        var cliente = clienteService.findOne(id).get();

        if (cliente != null) {

            cliente.setTipoDocumento(clienteUpdate.getTipoDocumento());
            cliente.setNumeroDocumento(clienteUpdate.getNumeroDocumento());
            cliente.setNombre(clienteUpdate.getNombre());
            cliente.setApellido(clienteUpdate.getApellido());
            cliente.setDireccion(clienteUpdate.getDireccion());
            cliente.setCiudad(clienteUpdate.getCiudad());
            cliente.setTelefono(clienteUpdate.getTelefono());
            cliente.setEstado(clienteUpdate.getEstado());

            clienteService.save(cliente);
            return new ResponseEntity<>(cliente, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error cliente No encontrado", HttpStatus.BAD_REQUEST);
        }
    }
}
