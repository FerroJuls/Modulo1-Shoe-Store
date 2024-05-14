function buscarPorFiltro(filtro, tipo) {
    if (filtro.trim() === "") return; // Si el filtro está vacío, salir de la función

    var url = tipo === "nit" ? "http://localhost:8080/api/v1/proveedor/busquedafiltro/" : "http://localhost:8080/api/v1/proveedor/busquedafiltroRazonSocial/";
    var parametro = tipo === "nit" ? filtro : encodeURIComponent(filtro);
    
    $.ajax({
        url: url + parametro,
        type: "GET",
        success: function (result) {
            var cuerpoTabla = document.getElementById("cuerpoTabla");
            cuerpoTabla.innerHTML = "";

            for (var i = 0; i < result.length; i++) {
                var trRegistro = document.createElement("tr");
                trRegistro.innerHTML = `
                        <td>${result[i]["idProveedor"]}</td>
                        <td class="text-center align-middle">${result[i]["nit"]}</td>
                        <td class="text-center align-middle">${result[i]["razonSocial"]}</td>
                        <td class="text-center align-middle">${result[i]["nombre"]}</td>
                        <td class="text-center align-middle">${result[i]["cargo"]}</td>
                        <td class="text-center align-middle">${result[i]["telefono"]}</td>
                        <td class="text-center align-middle">${result[i]["direccion"]}</td>
                        <td class="text-center align-middle">${result[i]["estado"]}</td>
                        <td class="text-center align-middle">
                            <i class="fas fa-edit editar"  onclick="registrarProveedorBandera=false;" data-id="${result[i]["idProveedor"]}"></i>
                            <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idProveedor"]})" data-id="${result[i]["idProveedor"]}"></i>
                            <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idProveedor"]}"></i>
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
    document.getElementById('filtroInputNit').value = ""; // Limpiar campo de nombre
    document.getElementById('filtroInputRazonSocial').value = ""; // Limpiar campo de ciudad
    document.getElementById('filtroEstado').value = ""; // Seleccionar automáticamente el valor "Todos" en el campo de estado
}


function buscarProveedorPorEstado(estado) {
    if (estado === '') {
        listarProveedor(); // Mostrar todos los proveedors si estado es vacío
    } else if (estado === 'Activo') {
        // Mostrar solo los Clientes habilitados si estado es 'H'
        $.ajax({
            url: "http://localhost:8080/api/v1/proveedor/busquedafiltroEstado/" + estado,
            type: "GET",
            success: function (result) {
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML = "";

                for (var i = 0; i < result.length; i++) {
                    var trRegistro = document.createElement("tr");
                    trRegistro.innerHTML = `
                            <td>${result[i]["idProveedor"]}</td>
                            <td class="text-center align-middle">${result[i]["nit"]}</td>
                            <td class="text-center align-middle">${result[i]["razonSocial"]}</td>
                            <td class="text-center align-middle">${result[i]["nombre"]}</td>
                            <td class="text-center align-middle">${result[i]["cargo"]}</td>
                            <td class="text-center align-middle">${result[i]["telefono"]}</td>
                            <td class="text-center align-middle">${result[i]["direccion"]}</td>
                            <td class="text-center align-middle">${result[i]["estado"]}</td>
                            <td class="text-center align-middle">
                                <i class="fas fa-edit editar"  onclick="registrarProveedorBandera=false;" data-id="${result[i]["idProveedor"]}"></i>
                                <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idProveedor"]})" data-id="${result[i]["idProveedor"]}"></i>
                                <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idProveedor"]}"></i>
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
            url: "http://localhost:8080/api/v1/proveedor/busquedafiltroEstado/" + estado,
            type: "GET",
            success: function (result) {
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML = "";

                for (var i = 0; i < result.length; i++) {
                    var trRegistro = document.createElement("tr");
                    trRegistro.innerHTML = `
                            <td>${result[i]["idProveedor"]}</td>
                            <td class="text-center align-middle">${result[i]["nit"]}</td>
                            <td class="text-center align-middle">${result[i]["razonSocial"]}</td>
                            <td class="text-center align-middle">${result[i]["nombre"]}</td>
                            <td class="text-center align-middle">${result[i]["cargo"]}</td>
                            <td class="text-center align-middle">${result[i]["telefono"]}</td>
                            <td class="text-center align-middle">${result[i]["direccion"]}</td>
                            <td class="text-center align-middle">${result[i]["estado"]}</td>
                            <td class="text-center align-middle">
                                <i class="fas fa-edit editar"  onclick="registrarProveedorBandera=false;" data-id="${result[i]["idProveedor"]}"></i>
                                <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idProveedor"]})" data-id="${result[i]["idProveedor"]}"></i>
                                <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idProveedor"]}"></i>
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
var url = "http://localhost:8080/api/v1/proveedor/";

// Función para listar los Clientes
function listarProveedor() {
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            var cuerpoTabla = document.getElementById("cuerpoTabla");
            cuerpoTabla.innerHTML = "";

            for (var i = 0; i < result.length; i++) {
                var trRegistro = document.createElement("tr");
                trRegistro.innerHTML = `
                        <td>${result[i]["idProveedor"]}</td>
                        <td class="text-center align-middle">${result[i]["nit"]}</td>
                        <td class="text-center align-middle">${result[i]["razonSocial"]}</td>
                        <td class="text-center align-middle">${result[i]["nombre"]}</td>
                        <td class="text-center align-middle">${result[i]["cargo"]}</td>
                        <td class="text-center align-middle">${result[i]["telefono"]}</td>
                        <td class="text-center align-middle">${result[i]["direccion"]}</td>
                        <td class="text-center align-middle">${result[i]["estado"]}</td>
                        <td class="text-center align-middle">
                            <i class="fas fa-edit editar"  onclick="registrarProveedorBandera=false;" data-id="${result[i]["idProveedor"]}"></i>
                            <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idProveedor"]})" data-id="${result[i]["idProveedor"]}"></i>
                            <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idProveedor"]}"></i>
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

var registrarProveedorBandera = true;

// Función para registrar un cliente
function registrarProveedor() {
    var nit = document.getElementById("nit");
    var razonSocial = document.getElementById("razonSocial");
    var nombre = document.getElementById("nombre");
    var cargo = document.getElementById("cargo");
    var telefono = document.getElementById("telefono");
    var direccion = document.getElementById("direccion");
    var estado = document.getElementById("estado");

    // Verificar si algún campo obligatorio está vacío
    if (!validarNit(nit) ||
        !validarRazonSocial(razonSocial) ||
        !validarNombre(nombre) ||
        !validarCargo(cargo) ||
        !validarTelefono(telefono) ||
        !validarDireccion(direccion) ||
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
        "nit": nit.value,
        "razonSocial": razonSocial.value,
        "nombre": nombre.value,
        "cargo": cargo.value,
        "telefono": telefono.value,
        "direccion": direccion.value,
        "estado": estado.value,
    };

    var metodo = "";
    var urlLocal = "";
    var textoimprimir = "";
    if (registrarProveedorBandera == true) {
        metodo = "POST";
        urlLocal = url;
        
    } else {
        metodo = "PUT";
        urlLocal = url + idProveedor;
        
    }

    if (validarCampos()) {
        $.ajax({
            url: urlLocal,
            type: metodo,
            data: forData,
            success: function (response) {
                Swal.fire({
                    title: "LISTO",
                    text: "Felicidades, Registro exitoso",
                    icon: "success"
                }).then(function () {
                    // Aquí puedes agregar más acciones después del registro exitoso
                    $('#exampleModal').modal('hide');
                    listarProveedor();
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

// Función nit 
function validarCampos() {
    var nit = document.getElementById("nit");
    return validarNit(nit);
}

// Función para validar NIT
function validarNit(cuadroNumero) {
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

// Función razonSocial
function validarCampos() {
    var razonSocial = document.getElementById("razonSocial");
    return validarRazonSocial(razonSocial);
}

// Función para validar la razonSocial 
function validarRazonSocial(cuadroNumero) {
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

// Función cargo

function validarCamposcargo() {
    var cargo = document.getElementById("cargo");
    return validarCargo(cargo);
}

function validarCargo(cuadroNumero) {
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
    document.getElementById("nit").value = "";
    document.getElementById("nit").className = "form-control";
    document.getElementById("razonSocial").value = "";
    document.getElementById("razonSocial").className = "form-control";
    document.getElementById("nombre").value = "";
    document.getElementById("nombre").className = "form-control";
    document.getElementById("cargo").value = "";
    document.getElementById("cargo").className = "form-control";
    document.getElementById("telefono").value = "";
    document.getElementById("telefono").className = "form-control";
    document.getElementById("direccion").value = "";
    document.getElementById("direccion").className = "form-control";
    document.getElementById("estado").value = "";
    document.getElementById("estado").className = "form-control";
}

var idProveedor = "";
// Asociar eventos de clic a los iconos dentro de la tabla
$(document).on("click", ".editar", function () {
    limpiar();
    idProveedor = $(this).data("id");

    $.ajax({
        url: url + idProveedor,
        type: "GET",
        success: function (proveedor) {
            document.getElementById("nit").value = proveedor.nit;
            document.getElementById("razonSocial").value = proveedor.razonSocial;
            document.getElementById("nombre").value = proveedor.nombre;
            document.getElementById("cargo").value = proveedor.cargo;
            document.getElementById("telefono").value = proveedor.telefono;
            document.getElementById("direccion").value = proveedor.direccion;
            document.getElementById("estado").value = proveedor.estado;
            $('#exampleModal').modal('show');
        },
        error: function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: "Error al obtener los datos del proveedor"
            });
        }
    });
});

$(document).on("click", ".cambiarEstado", function () {
    var idProveedor = $(this).data("id");
    $.ajax({
        url: url + idProveedor,
        type: "DELETE",
        success: function () {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Cambio de estado exitoso",
                showConfirmButton: false,
                timer: 1500
            });
            listarProveedor(); // Actualiza la lista de proveedors en el front-end
        }
    });
});

$(document).on("click", ".eliminar", function () {
    // Obtener el ID del proveedor desde el atributo data del elemento clicado
    var idProveedor = $(this).data("id");

    // Mostrar un cuadro de diálogo para confirmar la eliminación
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¿Deseas eliminar este proveedor?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        // Si el usuario confirma la eliminación, proceder con la solicitud AJAX
        if (result.isConfirmed) {
            $.ajax({
                url: url + "eliminarPermanente/" + idProveedor,
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
                    // Actualizar la lista de proveedor después de eliminar
                    listarProveedor();
                },
                error: function (xhr, status, error) {
                    // Manejo de errores
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'El registro tiene una venta.'
                    });
                }
            });
        }
    });
});




// Llamar a la función para listar proveedor al cargar la página
$(document).ready(function () {
    listarProveedor();
});
function actualizarlistarProveedor() {
    listarProveedor();
}

