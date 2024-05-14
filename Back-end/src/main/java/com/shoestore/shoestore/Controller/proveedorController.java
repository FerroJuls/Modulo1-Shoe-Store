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

import com.shoestore.shoestore.interfaceService.IproveedorService;
import com.shoestore.shoestore.models.proveedor;

@RequestMapping("/api/v1/proveedor")
@RestController
public class proveedorController {

    @Autowired
    private IproveedorService proveedorService;

    @PostMapping("/")
    public ResponseEntity<Object> save(@ModelAttribute("proveedor") proveedor proveedor) {

        if (proveedor.getNit().equals("")) {

            return new ResponseEntity<>("El NIT es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (proveedor.getRazonSocial().equals("")) {

            return new ResponseEntity<>("La razon social es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (proveedor.getNombre().equals("")) {

            return new ResponseEntity<>("El nombre del proveedor/contacto es un campo obligatorio",
                    HttpStatus.BAD_REQUEST);
        }

        if (proveedor.getCargo().equals("")) {

            return new ResponseEntity<>("El cargo es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (proveedor.getTelefono().equals("")) {

            return new ResponseEntity<>("El telefono es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (proveedor.getDireccion().equals("")) {

            return new ResponseEntity<>("La direccion es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (proveedor.getEstado().equals("")) {

            return new ResponseEntity<>("El estado es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        proveedorService.save(proveedor);
        return new ResponseEntity<>(proveedor, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaProveedor = proveedorService.findAll();
        return new ResponseEntity<>(listaProveedor, HttpStatus.OK);
    }

    @GetMapping("/busquedafiltro/{filtro}")
    public ResponseEntity<Object> findFiltro(@PathVariable String filtro) {
        var listaProveedor = proveedorService.filtroProveedor(filtro);
        return new ResponseEntity<>(listaProveedor, HttpStatus.OK);
    }

    @GetMapping("/busquedafiltroRazonSocial/{razonSocial}")
    public ResponseEntity<Object> findFiltroProveedorRazonSocial(@PathVariable String razonSocial) {
        var listaProveedor = proveedorService.filtroProveedorRazonSocial(razonSocial);
        return new ResponseEntity<>(listaProveedor, HttpStatus.OK);
    }

    @GetMapping("/busquedafiltroEstado/{estado}")
    public ResponseEntity<Object> findFiltroProveedorEstado(@PathVariable String estado) {
        var listaProveedor = proveedorService.filtroProveedorEstado(estado);
        return new ResponseEntity<>(listaProveedor, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id) {
        var proveedor = proveedorService.findOne(id).get();

        if (proveedor != null) {
            if (proveedor.getEstado().equals("Activo")) {

                proveedor.setEstado("Inactivo");
                proveedorService.save(proveedor);
                return new ResponseEntity<>("Se ha inactivado correctamente", HttpStatus.OK);
            } else
                proveedor.setEstado("Activo");
            proveedorService.save(proveedor);
            return new ResponseEntity<>("Se ha activado correctamente", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("No se ha encontrado el registro", HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/eliminarPermanente/{id}")
    public ResponseEntity<Object> deleteForever(@PathVariable String id) {
        proveedorService.deleteForever(id);
        return new ResponseEntity<>("Registro eliminado Permanentemente", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id,
            @ModelAttribute("proveedor") proveedor proveedorUpdate) {
        var proveedor = proveedorService.findOne(id).get();

        if (proveedor != null) {

            proveedor.setNit(proveedorUpdate.getNit());
            proveedor.setRazonSocial(proveedorUpdate.getRazonSocial());
            proveedor.setNombre(proveedorUpdate.getNombre());
            proveedor.setCargo(proveedorUpdate.getCargo());
            proveedor.setTelefono(proveedorUpdate.getTelefono());
            proveedor.setDireccion(proveedorUpdate.getDireccion());
            proveedor.setEstado(proveedorUpdate.getEstado());

            proveedorService.save(proveedor);
            return new ResponseEntity<>(proveedor, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Error proveedor No encontrado", HttpStatus.BAD_REQUEST);
        }

    }
}
