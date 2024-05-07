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

import com.shoestore.shoestore.interfaceService.IproductoService;
import com.shoestore.shoestore.models.Producto;


@RequestMapping("/api/v1/Producto/")
@RestController
public class productoController {
    
    @Autowired
    private IproductoService productoService;

    @PostMapping("/")
    public ResponseEntity<Object> save(@ModelAttribute("Producto") Producto Producto) {
        
        

        if (Producto.getNombreProducto().equals("")) {

            return new ResponseEntity<>("El nombre es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Producto.getDescripcion().equals("")) {

            return new ResponseEntity<>("La Descripcion es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Producto.getCantidad().equals("")) {

            return new ResponseEntity<>("La Descripcion es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Producto.getPrecio().equals("")) {

            return new ResponseEntity<>("La dirección es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Producto.getPorcentajeIva().equals("")) {

            return new ResponseEntity<>("La ciudad es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Producto.getPorcentajeDescuento().equals("")) {

            return new ResponseEntity<>("El estado es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Producto.getEstado().equals("")) {

            return new ResponseEntity<>("El estado es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }
        
        // todo bien
        productoService.save(Producto);
        return new ResponseEntity<>(Producto, HttpStatus.OK);

    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaProducto = productoService.findAll();
        return new ResponseEntity<>(listaProducto, HttpStatus.OK);
    }

    @GetMapping("/busquedafiltro/{filtro}")
    public ResponseEntity<Object> findFiltro(@PathVariable String filtro) {
        var listaProducto = productoService.filtroProducto(filtro);
        return new ResponseEntity<>(listaProducto, HttpStatus.OK);
    }

    @GetMapping("/busquedafiltroestado/{estado}")
    public ResponseEntity<Object> findEstado(@PathVariable char estado) {
        var listaProducto = productoService.filtroProductoEstado(estado);
        return new ResponseEntity<>(listaProducto, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id) {
        var Producto = productoService.findOne(id);
        return new ResponseEntity<>(Producto, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id) {
        var Producto = productoService.findOne(id).get();
        if (Producto != null) {
            if (Producto.getEstado().equals("ACTIVO")) {

                Producto.setEstado("INACTIVO");
                productoService.save(Producto);
                return new ResponseEntity<>("El producto se ha inactivado correctamente", HttpStatus.OK);
            } else
                Producto.setEstado("ACTIVO");
                productoService.save(Producto);
            return new ResponseEntity<>("El producto se ha activado correctamente", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("No se ha encontrado el registro", HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/eliminarPermanente/{id}")
    public ResponseEntity<Object> deleteForever(@PathVariable String id) {
        productoService.deleteForever(id);
        return new ResponseEntity<>("Registro eliminado Permanentemente", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("Producto") Producto ProductoUpdate) {
        var Producto = productoService.findOne(id).get();
        if (Producto != null) {

            Producto.setNombreProducto(ProductoUpdate.getNombreProducto());
            Producto.setDescripcion(ProductoUpdate.getDescripcion());
            Producto.setCantidad(ProductoUpdate.getCantidad());
            Producto.setPrecio(ProductoUpdate.getPrecio());
            Producto.setPorcentajeIva(ProductoUpdate.getPorcentajeIva());
            Producto.setPorcentajeDescuento(ProductoUpdate.getPorcentajeDescuento());
            Producto.setEstado(ProductoUpdate.getEstado());

            productoService.save(Producto);
            return new ResponseEntity<>(Producto, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error Producto NO Encontrado", HttpStatus.BAD_REQUEST);
        }
    }
}
