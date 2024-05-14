function buscarVentaPorFiltro(filtro) {
    $.ajax({
        url: "http://localhost:8080/api/v1/ordenCompra/busquedafiltro/" + filtro,
        type: "GET",
        success: function (result) {
            var cuerpoTabla = document.getElementById("cuerpoTabla");
            cuerpoTabla.innerHTML = "";
            for (var i = 0; i < result.length; i++) {
                var trRegistro = document.createElement("tr");
                trRegistro.innerHTML = `
                    <td>${result[i]["idOrdenCompra"]}</td>
                    <td class="text-center align-middle">${result[i]["proveedor"]["nombre"]}</td>
                    <td class="text-center align-middle">${result[i]["fechaCompra"]}</td>
                    <td class="text-center align-middle">${result[i]["total"]}</td>
                    <td class="text-center align-middle">${result[i]["estado"]}</td>
                    <td class="text-center align-middle">
                    <i class="fas fa-edit editar"  onclick="registrarOrdenCompraBandera=false;" data-id="${result[i]["idOrdenCompra"]}"></i>
                    <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idOrdenCompra"]}"></i>
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


function blanquearCampos() {
    document.getElementById('filtroInputProveedor').value = "";
    document.getElementById('filtroEstado').value = "";
    document.getElementById('filtroInputFecha').value = "";
}

function buscarOrdenCompraPorEstado(estado) {
    var url = "http://localhost:8080/api/v1/ordenCompra/busquedaEstado/";

    if (estado === 'Todos' || estado === '') {
        listarOrdenCompra(); // Mostrar todos los médicos si estado es vacío o 'Todos'
    } else {
        // Construir la URL según el estado seleccionado
        switch (estado) {
            case 'Borrador':
            case 'Cancelado':
            case 'Aprobado':
                url += estado;
                break;
            default:
                alert("Estado no válido");
                return;
        }

        $.ajax({
            url: url,
            type: "GET",
            success: function (result) {
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML = "";

                for (var i = 0; i < result.length; i++) {
                    var trRegistro = document.createElement("tr");
                    trRegistro.innerHTML = `
                        <td>${result[i]["idOrdenCompra"]}</td>
                        <td class="text-center align-middle">${result[i]["proveedor"]["nombre"]}</td>
                        <td class="text-center align-middle">${result[i]["fechaCompra"]}</td>
                        <td class="text-center align-middle">${result[i]["total"]}</td>
                        <td class="text-center align-middle">${result[i]["estado"]}</td>
                        <td class="text-center align-middle">
                        <i class="fas fa-edit editar"  onclick="registrarOrdenCompraBandera=false;" data-id="${result[i]["idOrdenCompra"]}"></i>
                        <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idOrdenCompra"]}"></i>
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
    cargarProveedorActivos();
});

// Función para cargar la lista de pacientes activos
function cargarProveedorActivos() {
    $.ajax({
        url: "http://localhost:8080/api/v1/proveedor/busquedaEstado/Activo",
        type: "GET",
        success: function (result) {
            result.forEach(function (proveedor) {
                $("#proveedor").append(`<option value="${proveedor.idProveedor}">${proveedor.nombre}</option>`);
            });
        },
        error: function (error) {
            console.error("Error al cargar proveedorer activos:", error);
        }
    });
}

//se almacena la url de la API
var url = "http://localhost:8080/api/v1/ordenCompra/";
function listarOrdenCompra() {
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
                    <td>${result[i]["idOrdenCompra"]}</td>
                    <td class="text-center align-middle">${result[i]["proveedor"]["nombre"]}</td>
                    <td class="text-center align-middle">${result[i]["fechaCompra"]}</td>
                    <td class="text-center align-middle">${result[i]["total"]}</td>
                    <td class="text-center align-middle">${result[i]["estado"]}</td>
                    <td class="text-center align-middle">
                    <i class="fas fa-edit editar"  onclick="registrarOrdenCompraBandera=false;" data-id="${result[i]["idOrdenCompra"]}"></i>
                    <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idOrdenCompra"]}"></i>
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

var registrarOrdenCompraBandera = true;
//se almacenan los valores
function registrarOrdenVenta() {
    var proveedor = document.getElementById("proveedor");
    var fechaCompra = document.getElementById("fechaCompra");
    var total = document.getElementById("total");
    var estado = document.getElementById("estado");

    // Verificar si algún campo obligatorio está vacío
    if (!validarProveedor(proveedor) ||
        !validarFechaCompra(fechaCompra) ||
        !validarTotal(total) ||
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
        "proveedor": document.getElementById("proveedor").value,
        "fechaCompra": document.getElementById("fechaCompra").value,
        "total": document.getElementById("total").value,
        "estado": document.getElementById("estado").value,
    };

    var metodo = "";
    var urlLocal = "";
    var textoimprimir = "";
    if (registrarOrdenCompraBandera == true) {
        metodo = "POST";
        urlLocal = url;
        // Elimina esta alerta
        // textoimprimir = Swal.fire({
        //     title: "LISTO",
        //     text: "Felicidades, Registro exitoso",
        //     icon: "success"
        // });
    } else {
        metodo = "PUT";
        urlLocal = url + idOrdenCompra;
    }

    if (validarCampos()) {
        $.ajax({
            url: urlLocal,
            type: metodo,
            data: forData,
            success: function (response) {
                Swal.fire({
                    title: "LISTO",
                    text: "Guardado con éxito",
                    icon: "success"
                }).then(function () {
                    // Refrescar la página después de registrar exitosamente el producto
                    $('#exampleModal').modal('hide');
                    listarOrdenCompra();
                });
            },
        });
    } else {
        Swal.fire({
            title: "Error",
            text: "¡Llene todos los campos correctamente!",
            icon: "error"
        });
    }
};



// Función para validar campos

// Función proveedor

function validarCampos() {
    var proveedor = document.getElementById("proveedor");
    return validarProveedor(proveedor);
}

function validarProveedor(cuadroNumero) {
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


// Función fechaCompra

function validarCamposfechaCompra() {
    var fechaCompra = document.getElementById("fechaCompra");
    return validarFechaCompra(fechaCompra);
}

function validarFechaCompra(cuadroNumero) {
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


// Función total

function validartotal() {
    var total = document.getElementById("total");
    return validarTotal(total);
}

function validarTotal(cuadroNumero) {
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

    document.getElementById("proveedor").value = "";
    document.getElementById("proveedor").className = "form-control";
    document.getElementById("fechaCompra").value = "";
    document.getElementById("fechaCompra").className = "form-control";
    document.getElementById("total").value = "";
    document.getElementById("total").className = "form-control";
    document.getElementById("estado").value = "";
    document.getElementById("estado").className = "form-control";


}

var idOrdenCompra = "";
// Asociar eventos de clic a los iconos dentro de la tabla
$(document).on("click", ".editar", function () {
    idOrdenCompra = $(this).data("id");
    limpiar();
    $.ajax({
        url: url + idOrdenCompra,
        type: "GET",
        success: function (ordenCompra) {
            document.getElementById("proveedor").value = ordenCompra.proveedor.idProveedor;
            document.getElementById("fechaCompra").value = ordenCompra.fechaCompra;
            document.getElementById("total").value = ordenCompra.total;
            document.getElementById("estado").value = ordenCompra.estado;
            $('#exampleModal').modal('show');
        },
        error: function (error) {
            alert("Error al obtener los datos de la Orden de Compre: " + error.statusText);
        }
    });
});



$(document).on("click", ".eliminar", function () {
    // Obtener el ID del ingreso desde el atributo data del elemento clicado
    var idOrdenCompra = $(this).data("id");

    // Mostrar un cuadro de diálogo para confirmar la eliminación
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¿Deseas eliminar esta Orden?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        // Si el usuario confirma la eliminación, proceder con la solicitud AJAX
        if (result.isConfirmed) {
            $.ajax({
                url: url + "eliminarPermanente/" + idOrdenCompra,
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
                    listarOrdenCompra();
                },
            });
        }
    });
});


// Llamar a la función para listar médicos al cargar la página
$(document).ready(function () {
    listarOrdenCompra();
});
function actualizarlistarOrdenCompra() {
    listarOrdenCompra();
}


$(document).ready(function () {
    $('#filtroInputFecha').datepicker({
        format: 'yyyy-mm-dd', // Formato de fecha
        autoclose: true, // Cierra el datepicker cuando se selecciona una fecha
        todayHighlight: true // Resalta la fecha actual
    });
}); 