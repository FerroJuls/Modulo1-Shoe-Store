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

import com.shoestore.shoestore.interfaceService.IdetalleService;
import com.shoestore.shoestore.models.detalle;

@RequestMapping("/api/v1/detalle/")
@RestController
public class detalleController {

    @Autowired
    private IdetalleService detalleService;

    @PostMapping("/")
    public ResponseEntity<Object> save(@ModelAttribute("detalle") detalle detalle) {

        if (detalle.getCantidad().equals("")) {

            return new ResponseEntity<>("La cantidad es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (detalle.getPrecio().equals("")) {

            return new ResponseEntity<>("El precio es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (detalle.getDescuento().equals("")) {

            return new ResponseEntity<>("El descuento es un campo Obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (detalle.getVenta().equals("")) {

            return new ResponseEntity<>("El campo venta es un campo obligatorio", HttpStatus.BAD_REQUEST);

        }

        if (detalle.getProducto().equals("")) {

            return new ResponseEntity<>("El producto es un campo obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (detalle.getSubTotal().equals("")) {

            return new ResponseEntity<>("El subtotal es un campo  obligatorio", HttpStatus.BAD_REQUEST);
        }

        detalleService.save(detalle);
        return new ResponseEntity<>(detalle, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaDetalle = detalleService.findAll();
        return new ResponseEntity<>(listaDetalle, HttpStatus.OK);
    }

    @DeleteMapping("/eliminarPermanente/{id}")
    public ResponseEntity<Object> deleteForever(@PathVariable String id) {
        detalleService.deleteForever(id);
        return new ResponseEntity<>("Registro Eliminado permanentemente", HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<Object> update(@PathVariable String id,
            @ModelAttribute("detalleVenta") detalle detalleUpdate) {
        var detalleVenta = detalleService.findOne(id).get();

        if (detalleVenta != null) {

            detalleVenta.setVenta(detalleUpdate.getVenta());
            detalleVenta.setPrecio(detalleUpdate.getPrecio());
            detalleVenta.setCantidad(detalleUpdate.getCantidad());
            detalleVenta.setDescuento(detalleUpdate.getDescuento());
            detalleVenta.setProducto(detalleUpdate.getProducto());
            detalleVenta.setSubTotal(detalleUpdate.getSubTotal());

            detalleService.save(detalleVenta);
            return new ResponseEntity<>(detalleVenta, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error registro NO encontrado", HttpStatus.BAD_REQUEST);
        }
    }

}
