
    document.addEventListener('DOMContentLoaded', function () {
        flatpickr('.flatpickr-input', {
            dateFormat: 'Y-m-d' // Formato de fecha (opcional)
            // Otras opciones de configuración aquí
        });
    });
    
    function buscarVentaPorFiltro(filtro) {
        if (filtro === '') {
            listarVenta(); // Mostrar todos los médicos si estado es vacío
        } else {
            $.ajax({
                url: "http://localhost:8080/api/v1/Venta/busquedafiltro/" + filtro,
                type: "GET",
                success: function (result) {
                    var cuerpoTabla = document.getElementById("cuerpoTabla");
                    cuerpoTabla.innerHTML = "";
                    for (var i = 0; i < result.length; i++) {
                        var trRegistro = document.createElement("tr");
                        trRegistro.innerHTML = `
                    <td>${result[i]["idVenta"]}</td>
                    <td class="text-center align-middle">${result[i]["Cliente"]["documentoIdentidad"]} ${result[i]["Cliente"]["Nombre"]} ${result[i]["Cliente"]["Apellido"]}</td>
                    <td class="text-center align-middle">${result[i]["Total"]}</td>
                    <td class="text-center align-middle">${result[i]["fechaVenta"]}</td>
                    <td class="text-center align-middle">${result[i]["estado"]}</td>
                    <td class="text-center align-middle">
                    <i class="fas fa-edit editar"  onclick="registrarIngresoBandera=false;" data-id="${result[i]["idVenta"]}"></i>
                    <i class="fas fa-user-slash cambiarEstado" data-id="${result[i]["idVenta"]}"></i>
                    <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idVenta"]}"></i>
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
        cargarProductoActivos();
    });
    
    // Función para cargar la lista de pacientes activos
    function cargarClienteActivos() {
        $.ajax({
            url: "http://localhost:8080/api/v1/Cliente/busquedafiltroestado/ACTIVO",
            type: "GET",
            success: function (result) {
                result.forEach(function (paciente) {
                    $("#paciente").append(`<option value="${paciente.idPaciente}">${paciente.documentoIdentidad}-${paciente.primerNombre} ${paciente.primerApellido}</option>`);
                });
            },
            error: function (error) {
                console.error("Error al cargar pacientes activos:", error);
            }
        });
    }
    
    // Función para cargar la lista de médicos activos
    function cargarMedicosActivos() {
        $.ajax({
            url: "http://localhost:8080/api/v1/Medico/busquedafiltroestado/ACTIVO",
            type: "GET",
            success: function (result) {
                result.forEach(function (medico) {
                    $("#medico").append(`<option value="${medico.idMedico}">${medico.documentoIdentidad}-${medico.primerNombre} ${medico.primerApellido}</option>`);
                });
            },
            error: function (error) {
                console.error("Error al cargar médicos activos:", error);
            }
        });
    }
    
    
    
    
    
    //se almacena la url de la API
    var url = "http://localhost:8080/api/v1/Ingreso/";
    function listarVenta() {
        //metodo para alistar los medicos
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
                        <td class="text-center align-middle">${result[i]["habitacion"]}</td>
                        <td class="text-center align-middle">${result[i]["cama"]}</td>
                        <td class="text-center align-middle">${result[i]["paciente"]["documentoIdentidad"]} ${result[i]["paciente"]["primerNombre"]} ${result[i]["paciente"]["primerApellido"]}</td>
                        <td class="text-center align-middle">${result[i]["medico"]["documentoIdentidad"]} ${result[i]["medico"]["primerNombre"]} ${result[i]["medico"]["primerApellido"]}</td>
                        <td class="text-center align-middle">${result[i]["fechaIngreso"]}</td>
                        <td class="text-center align-middle">${result[i]["fechaSalida"]}</td>
                        <td class="text-center align-middle">${result[i]["estado"]}</td>
                        <td class="text-center align-middle">
                        <i class="fas fa-edit editar"  onclick="registrarIngresoBandera=false;" data-id="${result[i]["idVenta"]}"></i>
                        <i class="fas fa-user-slash cambiarEstado" data-id="${result[i]["idVenta"]}"></i>
                        <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idVenta"]}"></i>
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
    function registrarIngreso() {
        var habitacion = document.getElementById("habitacion");
        var cama = document.getElementById("cama");
        var fechaSalida = document.getElementById("fechaSalida");
        var Estado = document.getElementById("Estado");
    
        // Verificar si algún campo obligatorio está vacío
        if (!validarHabitacion(habitacion) ||
            !validarCama(cama) ||
            !validarFechaSalida(fechaSalida) ||
            !validarEstado(Estado)) {
            // Mostrar una alerta indicando que todos los campos son obligatorios
            Swal.fire({
                title: "¡Error!",
                text: "¡Llene todos los campos correctamente!",
                icon: "error"
            });
            return; // Salir de la función si algún campo está vacío
        }
    
        let forData = {
            "habitacion": document.getElementById("habitacion").value,
            "cama": document.getElementById("cama").value,
            "paciente": document.getElementById("paciente").value,
            "medico": document.getElementById("medico").value,
            "fechaIngreso": document.getElementById("fechaIngreso").value,
            "fechaSalida": document.getElementById("fechaSalida").value,
            "Estado": document.getElementById("Estado").value,
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
    
    // Función habitacion
    
    function validarCampos() {
        var habitacion = document.getElementById("habitacion");
        return validarHabitacion(habitacion);
    }
    
    function validarHabitacion(cuadroNumero) {
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
    
    
    // Función cama
    
    function validarCamposCama() {
        var cama = document.getElementById("cama");
        return validarCama(cama);
    }
    
    function validarCama(cuadroNumero) {
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
    
    
    // Función paciente
    
    function validarPaciente() {
        var paciente = document.getElementById("paciente");
        return validarPaciente(paciente);
    }
    
    function validarPaciente(cuadroNumero) {
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
    
    
    // Función medico
    
    function validarmMedico() {
        var medico = document.getElementById("medico");
        return validarMedico(medico);
    }
    
    function validarMedico(cuadroNumero) {
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
    
    
    // Función fechaIngreso
    
    function validarCamposFechaIngreso() {
        var fechaIngreso = document.getElementById("fechaIngreso");
        return validarFechaIngreso(fechaIngreso);
    }
    
    function validarFechaIngreso(cuadroNumero) {
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
    
    
    // Función fechaSalida
    
    function validarFechaSalida(cuadroNumero) {
        var fechaSalida = cuadroNumero.value;
        var fechaIngreso = document.getElementById("fechaIngreso").value;
    
        // Verificar si la fecha de salida está vacía
        if (fechaSalida === "") {
            // Si está vacía, se considera válida
            cuadroNumero.className = "form-control";
            return true;
        }
    
        var fechaSalidaDate = new Date(fechaSalida);
        var fechaIngresoDate = new Date(fechaIngreso);
    
        var valido = true;
    
        if (fechaSalidaDate < fechaIngresoDate) {
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
    
    function limpiar() {
    
        document.getElementById("habitacion").value = "";
        document.getElementById("habitacion").className = "form-control";
        document.getElementById("cama").value = "";
        document.getElementById("cama").className = "form-control";
        document.getElementById("paciente").value = "";
        document.getElementById("paciente").className = "form-control";
        document.getElementById("medico").value = "";
        document.getElementById("medico").className = "form-control";
        // Obtener la fecha actual
        var today = new Date();
    
        // Formatear la fecha como "YYYY-MM-DD"
        var formattedDate = today.toISOString().substr(0, 10);
    
        // Establecer la fecha actual como el valor predeterminado del campo de entrada de fecha
        document.getElementById("fechaIngreso").value = formattedDate;
        document.getElementById("fechaIngreso").className = "form-control";
        document.getElementById("fechaSalida").value = "";
        document.getElementById("fechaSalida").className = "form-control";
        document.getElementById("Estado").value = "";
        document.getElementById("Estado").className = "form-control";
    
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
                document.getElementById("habitacion").value = ingreso.habitacion;
                document.getElementById("cama").value = ingreso.cama;
                document.getElementById("paciente").value = ingreso.paciente.idPaciente;
                document.getElementById("medico").value = ingreso.medico.idMedico;
                document.getElementById("fechaIngreso").value = ingreso.fechaIngreso;
                document.getElementById("fechaSalida").value = ingreso.fechaSalida;
                document.getElementById("Estado").value = ingreso.estado;
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
    
    