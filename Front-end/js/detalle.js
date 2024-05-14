$(document).ready(function () {
    // Obtener el ID de la venta de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const ventaId = urlParams.get('id');

    // Función para cargar los detalles de la venta
    function cargarDetallesVenta() {
        $.ajax({
            url: "http://localhost:8080/api/v1/detalle/venta/" + ventaId,
            type: "GET",
            success: function (detalleVenta) {
                // Limpiar el cuerpo de la tabla de detalles
                $("#detalleTabla").empty();

                // Iterar sobre los detalles de la venta y agregar filas a la tabla
                detalleVenta.forEach(function (detalle) {
                    $("#detalleTabla").append(`
                        <tr>
                            <td>${detalle.idDetalle}</td>
                            <td>${detalle.producto.nombre}</td>
                            <td>${detalle.cantidad}</td>
                            <td>${detalle.precio}</td>
                            <td>${detalle.descuento}</td>
                            <td>${detalle.subTotal}</td>
                        </tr>
                    `);
                });
            },
            error: function (error) {
                console.error("Error al cargar detalles de la venta:", error);
            }
        });
    }

    // Llamar a la función para cargar los detalles de la venta al cargar la página
    cargarDetallesVenta();
});

