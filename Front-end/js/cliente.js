function buscarClientePorFiltro(filtro) {
    if (filtro=== '') {
        listarCliente(); // Mostrar todos los Clientes si estado es vacío
    }else{
        $.ajax({
            url: "http://localhost:8080/api/v1/Cliente/busquedafiltro/" + filtro,
            type: "GET",
            success: function (result) {
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML = "";
    
                for (var i = 0; i < result.length; i++) {
                    var trRegistro = document.createElement("tr");
                    trRegistro.innerHTML = `
                        <td>${result[i]["idCliente"]}</td>
                        <td class="text-center align-middle">${result[i]["tipoDocumento"]}</td>
                        <td class="text-center align-middle">${result[i]["documentoIdentidad"]}</td>
                        <td class="text-center align-middle">${result[i]["Nombre"]}</td>
                        <td class="text-center align-middle">${result[i]["Apellido"]}</td>
                        <td class="text-center align-middle">${result[i]["Telefono"]}</td>
                        <td class="text-center align-middle">${result[i]["Direccion"]}</td>
                        <td class="text-center align-middle">${result[i]["Ciudad"]}</td>
                        <td class="text-center align-middle">${result[i]["Correo"]}</td>
                        <td class="text-center align-middle">${result[i]["Estado"]}</td>cliente
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
    } else if (estado === 'ACTIVO') {
        // Mostrar solo los Clientes habilitados si estado es 'H'
        $.ajax({
            url: "http://localhost:8080/api/v1/Cliente/busquedafiltroestado/" + estado,
            type: "GET",
            success: function (result) {
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML = "";

                for (var i = 0; i < result.length; i++) {
                    var trRegistro = document.createElement("tr");
                    trRegistro.innerHTML = `
                        <td>${result[i]["idCliente"]}</td>
                        <td class="text-center align-middle">${result[i]["tipoDocumento"]}</td>
                        <td class="text-center align-middle">${result[i]["documentoIdentidad"]}</td>
                        <td class="text-center align-middle">${result[i]["Nombre"]}</td>
                        <td class="text-center align-middle">${result[i]["Apellido"]}</td>
                        <td class="text-center align-middle">${result[i]["Telefono"]}</td>
                        <td class="text-center align-middle">${result[i]["Direccion"]}</td>
                        <td class="text-center align-middle">${result[i]["Ciudad"]}</td>
                        <td class="text-center align-middle">${result[i]["Correo"]}</td>
                        <td class="text-center align-middle">${result[i]["Estado"]}</td>cliente
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
            url: "http://localhost:8080/api/v1/Cliente/busquedafiltroestado/" + estado,
            type: "GET",
            success: function (result) {
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML = "";

                for (var i = 0; i < result.length; i++) {
                    var trRegistro = document.createElement("tr");
                    trRegistro.innerHTML = `
                        <td>${result[i]["idCliente"]}</td>
                        <td class="text-center align-middle">${result[i]["tipoDocumento"]}</td>
                        <td class="text-center align-middle">${result[i]["documentoIdentidad"]}</td>
                        <td class="text-center align-middle">${result[i]["Nombre"]}</td>
                        <td class="text-center align-middle">${result[i]["Apellido"]}</td>
                        <td class="text-center align-middle">${result[i]["Telefono"]}</td>
                        <td class="text-center align-middle">${result[i]["Direccion"]}</td>
                        <td class="text-center align-middle">${result[i]["Ciudad"]}</td>
                        <td class="text-center align-middle">${result[i]["Correo"]}</td>
                        <td class="text-center align-middle">${result[i]["Estado"]}</td>cliente
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
var url = "http://localhost:8080/api/v1/Cliente/";

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
                    <td class="text-center align-middle">${result[i]["documentoIdentidad"]}</td>
                    <td class="text-center align-middle">${result[i]["Nombre"]}</td>
                    <td class="text-center align-middle">${result[i]["Apellido"]}</td>
                    <td class="text-center align-middle">${result[i]["Telefono"]}</td>
                    <td class="text-center align-middle">${result[i]["Direccion"]}</td>
                    <td class="text-center align-middle">${result[i]["Ciudad"]}</td>
                    <td class="text-center align-middle">${result[i]["Correo"]}</td>
                    <td class="text-center align-middle">${result[i]["Estado"]}</td>cliente
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
    var documentoIdentidad = document.getElementById("documentoIdentidad");
    var Nombre = document.getElementById("Nombre");
    var Apellido = document.getElementById("Apellido");
    var Telefono = document.getElementById("Telefono");
    var Direccion = document.getElementById("Direccion");
    var Ciudad = document.getElementById("Ciudad");
    var Correo = document.getElementById("Correo");
    var Estado = document.getElementById("Estado");

    // Verificar si algún campo obligatorio está vacío
    if (!validarTipoDocumento(tipoDocumento) ||
        !validarDocumentoIdentidad(documentoIdentidad) ||
        !validarNombre(Nombre) ||
        !validarApellido(Apellido) ||
        !validarTelefono(Telefono) ||
        !validarDireccion(Direccion) ||
        !validarCiudad(Ciudad) ||
        !validarCorreo(Correo) ||
        !validarEstado(Estado)) {
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
        "documentoIdentidad": documentoIdentidad.value,
        "Nombre": Nombre.value,
        "Apellido": Apellido.value,
        "Telefono": Telefono.value,
        "Direccion": Direccion.value,
        "Ciudad": Ciudad.value,
        "Correo": Correo.value,
        "Estado": Estado.value,
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

// Función Documento Identidad
function validarCampos() {
    var documentoIdentidad = document.getElementById("documentoIdentidad");
    return validarDocumentoIdentidad(documentoIdentidad);
}

// Función para validar el documento de identidad
function validarDocumentoIdentidad(cuadroNumero) {
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

function validarCamposNombre() {
    var Nombre = document.getElementById("Nombre");
    return validarNombre(Nombre);
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

function validarCamposApellido() {
    var Apellido = document.getElementById("Apellido");
    return validarApellido(Apellido);
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

function validarCamposTelefono() {
    var Telefono = document.getElementById("Telefono");
    return validarTelefono(Telefono);
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

function validarCamposDirección() {
    var Dirección = document.getElementById("Dirección");
    return validarDirección(Dirección);
}

function validarDirección(cuadroNumero) {
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

function validarCamposCiudad() {
    var Ciudad = document.getElementById("Ciudad");
    return validarCiudad(Ciudad);
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

function validarCamposCorreo() {
    var Correo = document.getElementById("Correo");
    return validarCorreo(Correo);
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

function validarCamposEstado() {
    var Estado = document.getElementById("Estado");
    return validarEstado(Estado);
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
    document.getElementById("documentoIdentidad").value = "";
    document.getElementById("documentoIdentidad").className = "form-control";
    document.getElementById("Nombre").value = "";
    document.getElementById("Nombre").className = "form-control";
    document.getElementById("Apellido").value = "";
    document.getElementById("Apellido").className = "form-control";
    document.getElementById("Telefono").value = "";
    document.getElementById("Telefono").className = "form-control";
    document.getElementById("Direccion").value = "";
    document.getElementById("Direccion").className = "form-control";
    document.getElementById("Ciudad").value = "";
    document.getElementById("Ciudad").className = "form-control";
    document.getElementById("Correo").value = "";
    document.getElementById("Correo").className = "form-control";
    document.getElementById("Estado").value = "";
    document.getElementById("Estado").className = "form-control";
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
            document.getElementById("documentoIdentidad").value = cliente.documentoIdentidad;
            document.getElementById("Nombre").value = cliente.Nombre;
            document.getElementById("Apellido").value = cliente.Apellido;
            document.getElementById("Telefono").value = cliente.Telefono;
            document.getElementById("Direccion").value = cliente.Direccion;
            document.getElementById("Ciudad").value = cliente.Ciudad;
            document.getElementById("Correo").value = cliente.Ciudad;
            document.getElementById("Estado").value = cliente.estado;
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

