function buscarClientePorFiltro(filtro) {
    if (filtro=== '') {
        listarCliente(); // Mostrar todos los Clientes si estado es vacío
    }else{
        $.ajax({
            url: "http://localhost:8080/api/v1/cliente/busquedafiltro/" + filtro,
            type: "GET",
            success: function (result) {
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML = "";
    
                for (var i = 0; i < result.length; i++) {
                    var trRegistro = document.createElement("tr");
                    trRegistro.innerHTML = `
                        <td>${result[i]["idCliente"]}</td>
                        <td class="text-center align-middle">${result[i]["tipoDocumento"]}</td>
                        <td class="text-center align-middle">${result[i]["numeroDocumento"]}</td>
                        <td class="text-center align-middle">${result[i]["nombre"]}</td>
                        <td class="text-center align-middle">${result[i]["apellido"]}</td>
                        <td class="text-center align-middle">${result[i]["telefono"]}</td>
                        <td class="text-center align-middle">${result[i]["direccion"]}</td>
                        <td class="text-center align-middle">${result[i]["ciudad"]}</td>
                        <td class="text-center align-middle">${result[i]["correo"]}</td>
                        <td class="text-center align-middle">${result[i]["estado"]}</td>cliente
                        <td class="text-center align-middle">
                            <i class="fas fa-edit editar"  onclick="registrarClienteBandera=false;" data-id="${result[i]["idCliente"]}"></i>
                            <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idCliente"]})" data-id="${result[i]["idCliente"]}"></i>
                            <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idCliente"]}"></i>
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

function buscarClientePorEstado(estado) {
    if (estado === '') {
        listarCliente(); // Mostrar todos los Clientes si estado es vacío
    } else if (estado === 'Activo') {
        // Mostrar solo los Clientes habilitados si estado es 'H'
        $.ajax({
            url: "http://localhost:8080/api/v1/cliente/busquedaEstado/" + estado,
            type: "GET",
            success: function (result) {
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML = "";

                for (var i = 0; i < result.length; i++) {
                    var trRegistro = document.createElement("tr");
                    trRegistro.innerHTML = `
                        <td>${result[i]["idCliente"]}</td>
                        <td class="text-center align-middle">${result[i]["tipoDocumento"]}</td>
                        <td class="text-center align-middle">${result[i]["numeroDocumento"]}</td>
                        <td class="text-center align-middle">${result[i]["nombre"]}</td>
                        <td class="text-center align-middle">${result[i]["apellido"]}</td>
                        <td class="text-center align-middle">${result[i]["telefono"]}</td>
                        <td class="text-center align-middle">${result[i]["direccion"]}</td>
                        <td class="text-center align-middle">${result[i]["ciudad"]}</td>
                        <td class="text-center align-middle">${result[i]["correo"]}</td>
                        <td class="text-center align-middle">${result[i]["estado"]}</td>
                        <td class="text-center align-middle">
                            <i class="fas fa-edit editar"  onclick="registrarClienteBandera=false;" data-id="${result[i]["idCliente"]}"></i>
                            <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idCliente"]})" data-id="${result[i]["idCliente"]}"></i>
                            <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idCliente"]}"></i>
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
        // Mostrar solo los Clientes deshabilitados si no es vacío ni 'H'
        $.ajax({
            url: "http://localhost:8080/api/v1/cliente/busquedafiltroestado/" + estado,
            type: "GET",
            success: function (result) {
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML = "";

                for (var i = 0; i < result.length; i++) {
                    var trRegistro = document.createElement("tr");
                    trRegistro.innerHTML = `
                        <td>${result[i]["idCliente"]}</td>
                        <td class="text-center align-middle">${result[i]["tipoDocumento"]}</td>
                        <td class="text-center align-middle">${result[i]["numeroDocumento"]}</td>
                        <td class="text-center align-middle">${result[i]["nombre"]}</td>
                        <td class="text-center align-middle">${result[i]["apellido"]}</td>
                        <td class="text-center align-middle">${result[i]["telefono"]}</td>
                        <td class="text-center align-middle">${result[i]["direccion"]}</td>
                        <td class="text-center align-middle">${result[i]["ciudad"]}</td>
                        <td class="text-center align-middle">${result[i]["correo"]}</td>
                        <td class="text-center align-middle">${result[i]["estado"]}</td>
                        <td class="text-center align-middle">
                            <i class="fas fa-edit editar"  onclick="registrarClienteBandera=false;" data-id="${result[i]["idCliente"]}"></i>
                            <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idCliente"]})" data-id="${result[i]["idCliente"]}"></i>
                            <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idCliente"]}"></i>
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
var url = "http://localhost:8080/api/v1/cliente/";

// Función para listar los Clientes
function listarCliente() {
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            var cuerpoTabla = document.getElementById("cuerpoTabla");
            cuerpoTabla.innerHTML = "";

            for (var i = 0; i < result.length; i++) {
                var trRegistro = document.createElement("tr");
                trRegistro.innerHTML = `
                    <td>${result[i]["idCliente"]}</td>
                    <td class="text-center align-middle">${result[i]["tipoDocumento"]}</td>
                    <td class="text-center align-middle">${result[i]["numeroDocumento"]}</td>
                    <td class="text-center align-middle">${result[i]["nombre"]}</td>
                    <td class="text-center align-middle">${result[i]["apellido"]}</td>
                    <td class="text-center align-middle">${result[i]["telefono"]}</td>
                    <td class="text-center align-middle">${result[i]["direccion"]}</td>
                    <td class="text-center align-middle">${result[i]["ciudad"]}</td>
                    <td class="text-center align-middle">${result[i]["correo"]}</td>
                    <td class="text-center align-middle">${result[i]["estado"]}</td>
                    <td class="text-center align-middle">
                        <i class="fas fa-edit editar"  onclick="registrarClienteBandera=false;" data-id="${result[i]["idCliente"]}"></i>
                        <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idCliente"]})" data-id="${result[i]["idCliente"]}"></i>
                        <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idCliente"]}"></i>
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

var registrarClienteBandera = true;

// Función para registrar un cliente
function registrarCliente() {
    var tipoDocumento = document.getElementById("tipoDocumento");
    var numeroDocumento = document.getElementById("numeroDocumento");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var telefono = document.getElementById("telefono");
    var direccion = document.getElementById("direccion");
    var ciudad = document.getElementById("ciudad");
    var correo = document.getElementById("correo");
    var estado = document.getElementById("estado");

    // Verificar si algún campo obligatorio está vacío
    if (!validarTipoDocumento(tipoDocumento) ||
        !validarNumeroDocumento(numeroDocumento) ||
        !validarNombre(nombre) ||
        !validarApellido(apellido) ||
        !validarTelefono(telefono) ||
        !validarDireccion(direccion) ||
        !validarCiudad(ciudad) ||
        !validarCorreo(correo) ||
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
        "tipoDocumento": tipoDocumento.value,
        "numeroDocumento": numeroDocumento.value,
        "nombre": nombre.value,
        "apellido": apellido.value,
        "telefono": telefono.value,
        "direccion": direccion.value,
        "ciudad": ciudad.value,
        "correo": correo.value,
        "estado": estado.value,
    };

    var metodo = "";
    var urlLocal = "";
    var textoimprimir = "";
    if (registrarClienteBandera == true) {
        metodo = "POST";
        urlLocal = url;
        textoimprimir = Swal.fire({
            title: "LISTO",
            text: "Felicidades, Registro exitoso",
            icon: "success"
        });
    } else {
        metodo = "PUT";
        urlLocal = url + idCliente;
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
                    listarCliente();
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

// Función Tipo Documento 
function validarCampos() {
    var tipoDocumento = document.getElementById("tipoDocumento");
    return validarTipoDocumento(tipoDocumento);
}

// Función para validar el documento de identidad
function validarTipoDocumento(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 0 || valor.length > 3) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}

// Función Documento Identidad
function validarCampos() {
    var numeroDocumento = document.getElementById("numeroDocumento");
    return validarNumeroDocumento(numeroDocumento);
}

// Función para validar el documento de identidad
function validarNumeroDocumento(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 5 || valor.length > 11) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}


// Función Nombre

function validarCamposnombre() {
    var nombre = document.getElementById("nombre");
    return validarNombre(nombre);
}

function validarNombre(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 11) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}

// Función Apellido

function validarCamposapellido() {
    var apellido = document.getElementById("apellido");
    return validarApellido(apellido);
}

function validarApellido(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 11) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}

// Función Telefono

function validarCampostelefono() {
    var telefono = document.getElementById("telefono");
    return validarTelefono(telefono);
}

function validarTelefono(cuadroNumero) {
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

// Función Dirección

function validarCamposdireccion() {
    var direccion = document.getElementById("direccion");
    return validarDireccion(direccion);
}

function validarDireccion(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 155) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}

// Función Ciudad

function validarCamposciudad() {
    var ciudad = document.getElementById("ciudad");
    return validarCiudad(ciudad);
}

function validarCiudad(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 155) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}

// Función Correo

function validarCamposcorreo() {
    var correo = document.getElementById("correo");
    return validarCorreo(correo);
}

function validarCorreo(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 155) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}

// Función Estado

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




// Función para limpiar campos del formulario
function limpiar() {
    document.getElementById("tipoDocumento").value = "";
    document.getElementById("tipoDocumento").className = "form-control";
    document.getElementById("numeroDocumento").value = "";
    document.getElementById("numeroDocumento").className = "form-control";
    document.getElementById("nombre").value = "";
    document.getElementById("nombre").className = "form-control";
    document.getElementById("apellido").value = "";
    document.getElementById("apellido").className = "form-control";
    document.getElementById("telefono").value = "";
    document.getElementById("telefono").className = "form-control";
    document.getElementById("direccion").value = "";
    document.getElementById("direccion").className = "form-control";
    document.getElementById("ciudad").value = "";
    document.getElementById("ciudad").className = "form-control";
    document.getElementById("correo").value = "";
    document.getElementById("correo").className = "form-control";
    document.getElementById("estado").value = "";
    document.getElementById("estado").className = "form-control";
}

var idCliente = "";
// Asociar eventos de clic a los iconos dentro de la tabla
$(document).on("click", ".editar", function () {
    limpiar();
    idCliente = $(this).data("id");

    $.ajax({
        url: url + idCliente,
        type: "GET",
        success: function (cliente) {
            document.getElementById("tipoDocumento").value = cliente.tipoDocumento;
            document.getElementById("numeroDocumento").value = cliente.numeroDocumento;
            document.getElementById("nombre").value = cliente.nombre;
            document.getElementById("apellido").value = cliente.apellido;
            document.getElementById("telefono").value = cliente.telefono;
            document.getElementById("direccion").value = cliente.direccion;
            document.getElementById("ciudad").value = cliente.ciudad;
            document.getElementById("correo").value = cliente.correo;
            document.getElementById("estado").value = cliente.estado;
            $('#exampleModal').modal('show');
        },
        error: function (error) {
            alert("Error al obtener los datos del cliente: " + error.statusText);
        }
    });
});

$(document).on("click", ".cambiarEstado", function () {
    var idCliente = $(this).data("id");
    $.ajax({
        url: url + idCliente,
        type: "DELETE",
        success: function () {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Cambio de estado exitoso",
                showConfirmButton: false,
                timer: 1500
            });
            listarCliente(); // Actualiza la lista de clientes en el front-end
        }
    });
});

$(document).on("click", ".eliminar", function () {
    // Obtener el ID del cliente desde el atributo data del elemento clicado
    var idCliente = $(this).data("id");

    // Mostrar un cuadro de diálogo para confirmar la eliminación
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¿Deseas eliminar este cliente?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        // Si el usuario confirma la eliminación, proceder con la solicitud AJAX
        if (result.isConfirmed) {
            $.ajax({
                url: url + "eliminarPermanente/" + idCliente,
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
                    listarCliente();
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
    listarCliente();
});
function actualizarlistarCliente() {
    listarCliente();
}

