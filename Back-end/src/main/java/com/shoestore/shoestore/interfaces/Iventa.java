package com.shoestore.shoestore.interfaces;

import java.time.LocalDate;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.shoestore.shoestore.models.venta;


@Repository
public interface Iventa extends CrudRepository<venta, String>{

    @Query("SELECT v FROM venta v WHERE v.estado LIKE ?1 ")
    List<venta> filtroEstado (String estado);

    @Query("SELECT v FROM venta v WHERE v.fechaVenta BETWEEN ?1 AND ?2")
    List<venta> filtroFecha(LocalDate fechaDesde, LocalDate fechaHasta);

    @Query("SELECT v from venta v JOIN v.cliente  c  WHERE\r\n" + //
            "c.numeroDocumento LIKE %?1% OR\r\n " + //
            "c.nombre LIKE %?1% OR\r\n " + //
            "c.apellido = %?1% \r\n" //
        //           
    )
    List<venta> filtroVenta(String filtro);

    

}