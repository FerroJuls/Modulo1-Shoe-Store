function buscarVentaPorFiltro(filtro) {
    if (filtro === '') {
        listarVenta(); // Mostrar todos los médicos si estado es vacío
    } else {
        $.ajax({
            url: "http://localhost:8080/api/v1/venta/busquedafiltro/" + filtro,
            type: "GET",
            success: function (result) {
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML = "";
                for (var i = 0; i < result.length; i++) {
                    var trRegistro = document.createElement("tr");
                    trRegistro.innerHTML = `
                    <td>${result[i]["idVenta"]}</td>
                    <td class="text-center align-middle">${result[i]["cliente"]["numeroDocumento"]} ${result[i]["cliente"]["nombre"]} ${result[i]["cliente"]["apellido"]}</td>
                    <td class="text-center align-middle">${result[i]["total"]}</td>
                    <td class="text-center align-middle">${result[i]["fechaVenta"]}</td>
                    <td class="text-center align-middle">${result[i]["estado"]}</td>
                    <td class="text-center align-middle">
                    <button type="button" class="btn btn-secondary">Ver Detalle</button>
                    </td>
                `;
                    cuerpoTabla.appendChild(trRegistro);
                }
            },
            error: function (error) {
                alert("Error en la petición: " + error);
            }
        });
    }
}


// Llamar a las funciones para cargar las listas al cargar la página
$(document).ready(function () {
    cargarClienteActivos();
});

// Función para cargar la lista de pacientes activos
function cargarClienteActivos() {
    $.ajax({
        url: "http://localhost:8080/api/v1/cliente/busquedaEstado/Activo",
        type: "GET",
        success: function (result) {
            result.forEach(function (cliente) {
                $("#cliente").append(`<option value="${cliente.idCliente}">${cliente.numeroDocumento}-${cliente.nombre} ${cliente.apellido}</option>`);
            });
        },
        error: function (error) {
            console.error("Error al cargar clientes activos:", error);
        }
    });
}

//se almacena la url de la API
var url = "http://localhost:8080/api/v1/venta/";
function listarVenta() {
    //metodo para alistar los productos
    //se crea la peticion AJAX
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            //se crea un objeto que contenga
            //el cuerpo de la tabla
            var cuerpoTabla = document.getElementById("cuerpoTabla");
            //se limpia el cuerpo de la tabla
            cuerpoTabla.innerHTML = "";
            //Se hace un ciclo que recorra 
            //el arreglo con los datos
            for (var i = 0; i < result.length; i++) {
                var trRegistro = document.createElement("tr");
                trRegistro.innerHTML = `
                <td>${result[i]["idVenta"]}</td>
                <td class="text-center align-middle">${result[i]["cliente"]["numeroDocumento"]} ${result[i]["cliente"]["nombre"]} ${result[i]["cliente"]["apellido"]}</td>
                <td class="text-center align-middle">${result[i]["total"]}</td>
                <td class="text-center align-middle">${result[i]["fechaVenta"]}</td>
                <td class="text-center align-middle">${result[i]["estado"]}</td>
                <td class="text-center align-middle">
                <button type="button" class="btn btn-secondary">Ver Detalle</button>
                </td>
            `;
                cuerpoTabla.appendChild(trRegistro);
            }
        },
        error: function (error) {
            alert("Error en la petición: " + error);
        }
    });
}

var registrarIngresoBandera = true;
//se almacenan los valores
function registrarVenta() {
    var cliente = document.getElementById("cliente");
    var total = document.getElementById("total");
    var fechaVenta = document.getElementById("fechaVenta");
    var estado = document.getElementById("estado");

    // Verificar si algún campo obligatorio está vacío
    if (!validarCliente(cliente) ||
        !validarTotal(total) ||
        !validarFechaVenta(fechaVenta) ||
        !validarEstado(estado)) {
        // Mostrar una alerta indicando que todos los campos son obligatorios
        Swal.fire({
            title: "¡Error!",
            text: "¡Llene todos los campos correctamente!",
            icon: "error"
        });
        return; // Salir de la función si algún campo está vacío
    }

    let forData = {
        "cliente": document.getElementById("cliente").value,
        "total": document.getElementById("total").value,
        "fechaVenta": document.getElementById("fechaVenta").value,
        "estado": document.getElementById("estado").value,
    };

    var metodo = "";
    var urlLocal = "";
    var textoimprimir = "";
    if (registrarIngresoBandera == true) {
        metodo = "POST";
        urlLocal = url;
    } else {
        metodo = "PUT";
        urlLocal = url + idVenta;
    }
    if (validarCampos()) {
        $.ajax({
            url: urlLocal,
            type: metodo,
            data: forData,
            success: function (result) {
                textoimprimir;
                $('#exampleModal').modal('hide');
                listarVenta();

                textoimprimir = Swal.fire({
                    title: "LISTO",
                    text: "Felicidades, Guardado con éxito",
                    icon: "success"
                });
            },
            error: function (error) {
                textoimprimir = Swal.fire({
                    title: "ERROR",
                    text: error.responseText,
                    icon: "ERROR"
                });
            }
        });
    } else {
        Swal.fire({
            title: "¡Error!",
            text: "¡Llene todos los campos correctamente!",
            icon: "error"
        });
    }
}


// Función para validar campos

// Función total

function validarCampos() {
    var total = document.getElementById("total");
    return validarTotal(total);
}

function validarTotal(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 45) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}


// Función cliente

function validarCamposcliente() {
    var cliente = document.getElementById("cliente");
    return validarCliente(cliente);
}

function validarCliente(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 100) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}


// Función fechaVenta

function validarfechaVenta() {
    var fechaVenta = document.getElementById("fechaVenta");
    return validarFechaVenta(fechaVenta);
}

function validarFechaVenta(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 0 || valor.length > 155) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}



// Función estado

function validarCamposestado() {
    var estado = document.getElementById("estado");
    return validarEstado(estado);
}

function validarEstado(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 15) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}

function limpiar() {

    document.getElementById("cliente").value = "";
    document.getElementById("cliente").className = "form-control";
    document.getElementById("total").value = "";
    document.getElementById("total").className = "form-control";
    document.getElementById("fechaVenta").value = "";
    document.getElementById("fechaVenta").className = "form-control";
    document.getElementById("estado").value = "";
    document.getElementById("estado").className = "form-control";


}

var idVenta = "";
// Asociar eventos de clic a los iconos dentro de la tabla
$(document).on("click", ".editar", function () {
    idVenta = $(this).data("id");
    limpiar();
    $.ajax({
        url: url + idVenta,
        type: "GET",
        success: function (ingreso) {
            document.getElementById("cliente").value = ingreso.cliente.idClienta;
            document.getElementById("total").value = ingreso.total;
            document.getElementById("fechaVenta").value = ingreso.fechaVenta;
            document.getElementById("estado").value = ingreso.estado;
            $('#exampleModal').modal('show');
        },
        error: function (error) {
            alert("Error al obtener los datos del Ingreso: " + error.statusText);
        }
    });
});


$(document).on("click", ".cambiarEstado", function () {
    var idVenta = $(this).data("id");
    $.ajax({
        url: url + idVenta,
        type: "DELETE",
        success: function () {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Cambio de estado exitoso",
                showConfirmButton: false,
                timer: 1500
            });
            listarVenta(); // Actualiza la lista de pacientes en el front-end
        }
    });
});

$(document).on("click", ".eliminar", function () {
    // Obtener el ID del ingreso desde el atributo data del elemento clicado
    var idVenta = $(this).data("id");

    // Mostrar un cuadro de diálogo para confirmar la eliminación
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¿Deseas eliminar este ingreso?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        // Si el usuario confirma la eliminación, proceder con la solicitud AJAX
        if (result.isConfirmed) {
            $.ajax({
                url: url + "eliminarPermanente/" + idVenta,
                type: "DELETE",
                success: function () {
                    // Mostrar un mensaje de éxito
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Registro Eliminado",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // Actualizar la lista de ingresos después de la eliminación
                    listarVenta();
                },
            });
        }
    });
});


// Llamar a la función para listar médicos al cargar la página
$(document).ready(function () {
    listarVenta();
});
function actualizarlistarVenta() {
    listarVenta();
}

$(document).ready(function () {
    $('#fechaVenta').datepicker({
        format: 'yyyy-mm-dd', // Formato de fecha
        autoclose: true, // Cierra el datepicker cuando se selecciona una fecha
        todayHighlight: true // Resalta la fecha actual
    });
});

$(document).ready(function () {
    $('#filtroFechaDesde').datepicker({
        format: 'yyyy-mm-dd', // Formato de fecha
        autoclose: true, // Cierra el datepicker cuando se selecciona una fecha
        todayHighlight: true // Resalta la fecha actual
    });
});

$(document).ready(function () {
    $('#filtroFechaHasta').datepicker({
        format: 'yyyy-mm-dd', // Formato de fecha
        autoclose: true, // Cierra el datepicker cuando se selecciona una fecha
        todayHighlight: true // Resalta la fecha actual
    });
});