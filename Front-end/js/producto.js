function buscarProductoPorFiltro(filtro) {
    if (filtro=== '') {
        listarProducto(); // Mostrar todos los productos si estado es vacío
    }else{
        $.ajax({
            url: "http://localhost:8080/api/v1/producto/busquedafiltro/" + filtro,
            type: "GET",
            success: function (result) {
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML = "";
    
                for (var i = 0; i < result.length; i++) {
                    var trRegistro = document.createElement("tr");
                    trRegistro.innerHTML = `
                        <td>${result[i]["idProducto"]}</td>
                        <td class="text-center align-middle">${result[i]["nombreProducto"]}</td>
                        <td class="text-center align-middle">${result[i]["descripcion"]}</td>
                        <td class="text-center align-middle">${result[i]["cantidad"]}</td>
                        <td class="text-center align-middle">${result[i]["precio"]}</td>
                        <td class="text-center align-middle">${result[i]["iva"]}</td>
                        <td class="text-center align-middle">${result[i]["descuento"]}</td>
                        <td class="text-center align-middle">${result[i]["estado"]}</td>
                        <td class="text-center align-middle">
                            <i class="fas fa-edit editar"  onclick="registrarProductoBandera=false;" data-id="${result[i]["idProducto"]}"></i>
                            <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idProducto"]})" data-id="${result[i]["idProducto"]}"></i>
                            <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idProducto"]}"></i>
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

function buscarProductoPorEstado(estado) {
    if (estado === '') {
        listarProducto(); // Mostrar todos los productos si estado es vacío
    } else if (estado === 'Activo') {
        // Mostrar solo los productos habilitados si estado es 'H'
        $.ajax({
            url: "http://localhost:8080/api/v1/producto/busquedaEstado/" + estado,
            type: "GET",
            success: function (result) {
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML = "";

                for (var i = 0; i < result.length; i++) {
                    var trRegistro = document.createElement("tr");
                    trRegistro.innerHTML = `
                        <td>${result[i]["idProducto"]}</td>
                        <td class="text-center align-middle">${result[i]["nombreProducto"]}</td>
                        <td class="text-center align-middle">${result[i]["descripcion"]}</td>
                        <td class="text-center align-middle">${result[i]["cantidad"]}</td>
                        <td class="text-center align-middle">${result[i]["precio"]}</td>
                        <td class="text-center align-middle">${result[i]["iva"]}</td>
                        <td class="text-center align-middle">${result[i]["descuento"]}</td>
                        <td class="text-center align-middle">${result[i]["estado"]}</td>
                        <td class="text-center align-middle">
                            <i class="fas fa-edit editar"  onclick="registrarProductoBandera=false;" data-id="${result[i]["idProducto"]}"></i>
                            <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idProducto"]})" data-id="${result[i]["idProducto"]}"></i>
                            <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idProducto"]}"></i>
                        </td>
                    `;
                    cuerpoTabla.appendChild(trRegistro);
                }
            },
            error: function (error) {
                alert("Error en la petición: " + error);
            }
        });
    } else {
        // Mostrar solo los productos deshabilitados si no es vacío ni 'H'
        $.ajax({
            url: "http://localhost:8080/api/v1/producto/busquedaEstado/" + estado,
            type: "GET",
            success: function (result) {
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML = "";

                for (var i = 0; i < result.length; i++) {
                    var trRegistro = document.createElement("tr");
                    trRegistro.innerHTML = `
                        <td>${result[i]["idProducto"]}</td>
                        <td class="text-center align-middle">${result[i]["nombreProducto"]}</td>
                        <td class="text-center align-middle">${result[i]["descripcion"]}</td>
                        <td class="text-center align-middle">${result[i]["cantidad"]}</td>
                        <td class="text-center align-middle">${result[i]["precio"]}</td>
                        <td class="text-center align-middle">${result[i]["iva"]}</td>
                        <td class="text-center align-middle">${result[i]["descuento"]}</td>
                        <td class="text-center align-middle">${result[i]["estado"]}</td>
                        <td class="text-center align-middle">
                            <i class="fas fa-edit editar"  onclick="registrarProductoBandera=false;" data-id="${result[i]["idProducto"]}"></i>
                            <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idProducto"]})" data-id="${result[i]["idProducto"]}"></i>
                            <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idProducto"]}"></i>
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






// URL de la API
var url = "http://localhost:8080/api/v1/producto/";

// Función para listar los productos
function listarProducto() {
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            var cuerpoTabla = document.getElementById("cuerpoTabla");
            cuerpoTabla.innerHTML = "";

            for (var i = 0; i < result.length; i++) {
                var trRegistro = document.createElement("tr");
                trRegistro.innerHTML = `
                    <td>${result[i]["idProducto"]}</td>
                    <td class="text-center align-middle">${result[i]["nombreProducto"]}</td>
                    <td class="text-center align-middle">${result[i]["descripcion"]}</td>
                    <td class="text-center align-middle">${result[i]["cantidad"]}</td>
                    <td class="text-center align-middle">${result[i]["precio"]}</td>
                    <td class="text-center align-middle">${result[i]["iva"]}</td>
                    <td class="text-center align-middle">${result[i]["descuento"]}</td>
                    <td class="text-center align-middle">${result[i]["estado"]}</td>
                    <td class="text-center align-middle">
                        <i class="fas fa-edit editar"  onclick="registrarProductoBandera=false;" data-id="${result[i]["idProducto"]}"></i>
                        <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idProducto"]})" data-id="${result[i]["idProducto"]}"></i>
                        <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idProducto"]}"></i>
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

var registrarProductoBandera = true;

// Función para registrar un cliente
function registrarProducto() {
    var nombreProducto = document.getElementById("nombreProducto");
    var descripcion = document.getElementById("descripcion");
    var cantidad = document.getElementById("cantidad");
    var precio = document.getElementById("precio");
    var iva = document.getElementById("iva");
    var descuento = document.getElementById("descuento");
    var estado = document.getElementById("estado");

    // Verificar si algún campo obligatorio está vacío
    if (!validarNombreProducto(nombreProducto) ||
        !validarDescripcion(descripcion) ||
        !validarCantidad(cantidad) ||
        !validarPrecio(precio) ||
        !validarIva(iva) ||
        !validarDescuento(descuento) ||
        !validarEstado(estado)) {
        // Mostrar una alerta indicando que todos los campos son obligatorios
        Swal.fire({
            title: "¡Error!",
            text: "¡Llene todos los campos correctamente!",
            icon: "error"
        });
        return; // Salir de la función si algún campo está vacío
    }

    var forData = {
        "nombreProducto": nombreProducto.value,
        "descripcion": descripcion.value,
        "cantidad": cantidad.value,
        "precio": precio.value,
        "iva": iva.value,
        "descuento": descuento.value,
        "estado": estado.value,
    };

    var metodo = "";
    var urlLocal = "";
    var textoimprimir = "";
    if (registrarProductoBandera == true) {
        metodo = "POST";
        urlLocal = url;
        textoimprimir = Swal.fire({
            title: "LISTO",
            text: "Felicidades, Registro exitoso",
            icon: "success"
        });
    } else {
        metodo = "PUT";
        urlLocal = url + idProducto;
        textoimprimir = Swal.fire({
            title: "LISTO",
            text: "Felicidades, Guardado con éxito",
            icon: "success"
        });
    }

    if (validarCampos()) {
        $.ajax({
            url: urlLocal,
            type: metodo,
            data: forData,
            success: function (response) {
                Swal.fire({
                    title: "Éxito",
                    text: "Felicidades, Guardado con éxito",
                    icon: "success"
                }).then(function () {
                    // Aquí puedes agregar más acciones después del registro exitoso
                    $('#exampleModal').modal('hide');
                    listarProducto();
                });
            },
            error: function (xhr, status, error) {
                Swal.fire({
                    title: "Error",
                    text: "¡El número de documento ya se encuentra registrado!",
                    icon: "error"
                });
            }
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

// Función nombreProducto 
function validarCampos() {
    var CantidadProducto = document.getElementById("nombreProducto");
    return validarNombreProducto(nombreProducto);
}

// Función para validar el nombreProducto
function validarNombreProducto(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 46) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}

// Función Descripcion
function validarCampos() {
    var descripcion = document.getElementById("descripcion");
    return validarDescripcion(descripcion);
}

// Función para validar Descripcion
function validarDescripcion(cuadroNumero) {
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


// Función Cantidad

function validarCamposCantidad() {
    var cantidad = document.getElementById("cantidad");
    return validarCantidad(cantidad);
}

function validarCantidad(cuadroNumero) {
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

// Función Precio

function validarCamposPrecio() {
    var precio = document.getElementById("precio");
    return validarPrecio(precio);
}

function validarPrecio(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 1000) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}

// Función iva

function validarCamposIva() {
    var iva = document.getElementById("iva");
    return validarIva(iva);
}

function validarIva(cuadroNumero) {
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

// Función descuento

function validarCamposDescuento() {
    var descuento = document.getElementById("descuento");
    return validarDescuento(descuento);
}

function validarDescuento(cuadroNumero) {
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

// Función estado

function validarCamposEstado() {
    var estado = document.getElementById("estado");
    return validarEstado(estado);
}

function validarEstado(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 9) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}




// Función para limpiar campos del formulario
function limpiar() {
    document.getElementById("nombreProducto").value = "";
    document.getElementById("nombreProducto").className = "form-control";
    document.getElementById("descripcion").value = "";
    document.getElementById("descripcion").className = "form-control";
    document.getElementById("cantidad").value = "";
    document.getElementById("cantidad").className = "form-control";
    document.getElementById("precio").value = "";
    document.getElementById("precio").className = "form-control";
    document.getElementById("iva").value = "";
    document.getElementById("iva").className = "form-control";
    document.getElementById("descuento").value = "";
    document.getElementById("descuento").className = "form-control";
    document.getElementById("estado").value = "";
    document.getElementById("estado").className = "form-control";
}

var idProducto = "";
// Asociar eventos de clic a los iconos dentro de la tabla
$(document).on("click", ".editar", function () {
    limpiar();
    idProducto = $(this).data("id");

    $.ajax({
        url: url + idProducto,
        type: "GET",
        success: function (producto) {
            document.getElementById("nombreProducto").value = producto.nombreProducto;
            document.getElementById("descripcion").value = producto.descripcion;
            document.getElementById("cantidad").value = producto.cantidad;
            document.getElementById("precio").value = producto.precio;
            document.getElementById("iva").value = producto.iva;
            document.getElementById("descuento").value = producto.descuento;
            document.getElementById("estado").value = producto.estado;
            $('#exampleModal').modal('show');
        },
        error: function (error) {
            alert("Error al obtener los datos del producto: " + error.statusText);
        }
    });
});

$(document).on("click", ".cambiarEstado", function () {
    var idProducto = $(this).data("id");
    $.ajax({
        url: url + idProducto,
        type: "DELETE",
        success: function () {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Cambio de estado exitoso",
                showConfirmButton: false,
                timer: 1500
            });
            listarProducto(); // Actualiza la lista de productos en el front-end
        }
    });
});



$(document).on("click", ".eliminar", function () {
    // Obtener el ID del cliente desde el atributo data del elemento clicado
    var idProducto = $(this).data("id");

    // Mostrar un cuadro de diálogo para confirmar la eliminación
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¿Deseas eliminar este Producto?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        // Si el usuario confirma la eliminación, proceder con la solicitud AJAX
        if (result.isConfirmed) {
            $.ajax({
                url: url + "eliminarPermanente/" + idProducto,
                type: "DELETE",
                success: function (eliminarPermanente) {
                    // Mostrar un mensaje de éxito
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Registro Eliminado",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // Actualizar la lista de cliente después de eliminar
                    listarProducto();
                },
                error: function (xhr, status, error) {
                    // Manejo de errores
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'El registro tiene un ingreso.'
                    });
                }
            });
        }
    });
});




// Llamar a la función para listar cliente al cargar la página
$(document).ready(function () {
    listarProducto();
});
function actualizarlistarProducto() {
    listarProducto();
}

