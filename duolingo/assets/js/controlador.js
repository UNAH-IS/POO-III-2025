let categorias = [];
let usuarios = [];
console.log("Categorias: ", categorias);
console.log("Usuarios: ", usuarios);
var indicePreguntaActual = 0;
var idCategoriaActual = null;
var respuestasCorrectas = 0;
var preguntaContestada = false;
var usuarioActual = null;

async function funcionAsincrona() {

}

const cargarCategorias = async () => {
    console.log("Cargar categorias desde el backend");
    const resultadoPeticion = await fetch('http://localhost:3000/categorias', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }); //10seg

    categorias = await resultadoPeticion.json(); //5seg   
    renderizarListaCategorias();
    console.log("Categorias obtenidas del backend: ", categorias);
}

const cargarUsuarios = async () => {
    console.log("Cargar usuarios desde el backend");
    const resultadoPeticion = await fetch('http://localhost:3000/usuarios', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }); //10seg

    usuarios = await resultadoPeticion.json(); //5seg   
    renderizarListaUsuarios();
    console.log("Usuarios obtenidas del backend: ", usuarios);
}

const obtenerDetallesUsuarioSeleccionado = async (idUsuario) => {
    //1. ir al servidor y obtener los detalles del usuario
    const resultadoDetalleUsuario = await fetch(`http://localhost:3000/usuarios/${idUsuario}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const resultado = await resultadoDetalleUsuario.json();
    usuarioActual = resultado.usuario;
    console.log("Detalles del usuario obtenido del backend: ", usuarioActual);
    //2. renderizar los detalles en la interfaz
    renderizarUsuarioSeleccionado(idUsuario); 
    mostrarSeccionCategorias();
}

const obtenerPreguntasCategoria = async (idCategoria) => {
    const resultado = await fetch(`http://localhost:3000/categorias/${idCategoria}/preguntas`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    const resultadoJson = await resultado.json();
    const preguntas = resultadoJson.preguntas;
    console.log("Preguntas obtenidas del backend: ", preguntas);
    return preguntas;
}


cargarCategorias();
cargarUsuarios();

const mostrarSeccionUsuarios = () => { //Arrow function
    console.log("Mostrar seccion usuarios");
    document.getElementById("seccion-categorias").style.display = "none";
    document.getElementById("seccion-preguntas").style.display = "none";
    document.getElementById("seccion-usuarios").style.display = "block";
}

const mostrarSeccionCategorias = () => {
    console.log("Mostrar seccion categorias");
    preguntaContestada = false;
    respuestasCorrectas = 0;

    document.getElementById("seccion-usuarios").style.display = "none";
    document.getElementById("seccion-preguntas").style.display = "none";
    document.getElementById("seccion-categorias").style.display = "block";
}

const mostrarSeccionPreguntas = () => {
    if (usuarioActual == null) {
        return;
    }
    console.log("Mostrar seccion preguntas");
    document.getElementById("seccion-usuarios").style.display = "none";
    document.getElementById("seccion-categorias").style.display = "none";
    document.getElementById("seccion-preguntas").style.display = "block";
}

const renderizarListaUsuarios = () => {
    document.getElementById("contenedor-usuarios").innerHTML = "";
    for (let i=0; i< usuarios.length; i++) {
        document.getElementById("contenedor-usuarios").innerHTML += 
                    `<div>
                        <div class="opcion-usuario" onclick="obtenerDetallesUsuarioSeleccionado(${usuarios[i].id})">
                            <img src="assets/img/${usuarios[i].imagenPerfil}">
                            <div>${usuarios[i].nombre}</div>
                        </div>
                    </div>`;
    }
}

const renderizarListaCategorias = () => {
    respuestasCorrectas = 0;
    categorias.forEach(categoria => {
        document.getElementById("contenedor-categorias").innerHTML += 
                `<div onclick="renderizarPregunta(${categoria.id}, 0); mostrarSeccionPreguntas();">
                    <div id="categoria-${categoria.id}" class="icono-categoria" style="background-color: ${categoria.color}">
                        <i class="${categoria.icono}"></i>
                    </div>
                    <div>
                        ${categoria.nombre}
                    </div>
                </div>`;
    });    
}

const renderizarPregunta = async (idCategoria, indicePregunta) => {
    const preguntas = await obtenerPreguntasCategoria(idCategoria);
    if (usuarioActual == null) {
        alert("Por favor selecciona un usuario primero.");
        return;
    }

    idCategoriaActual = idCategoria;
    const categoriaSeleccionada = categorias.find(categoria => categoria.id === idCategoria);
    console.log("Categoria seleccionada: ", categoriaSeleccionada);

    if (indicePregunta >= preguntas.length) {
        await actualizarResultadoUsuario(categoriaSeleccionada, preguntas.length);
        alert("¡Has completado la categoría!");
        indicePreguntaActual = 0;
        mostrarSeccionCategorias();
        return;
    }
    const preguntaSeleccionada = preguntas[indicePregunta]; //Por ahora solo la primera pregunta
    document.getElementById("palabra").innerHTML = preguntaSeleccionada.palabra;

    //Renderizar las opciones de respuestas
    document.getElementById("opciones-respuestas").innerHTML = "";
    preguntaSeleccionada.respuestas.forEach(respuesta => {
        document.getElementById("opciones-respuestas").innerHTML += 
            `<div>
                <div class="opcion-respuesta" onclick="verificarRespuesta('${respuesta.palabra}', ${respuesta.correcta}, this)">${respuesta.palabra}</div>
            </div>`;
    });

    document.getElementById("numero-pregunta-actual").innerText = indicePregunta + 1;
    document.getElementById("numero-pregunta-total").innerText = preguntas.length;
}

const actualizarResultadoUsuario = async (categoriaSeleccionada, cantidadPreguntas) => {
    const resultado = await fetch(`http://localhost:3000/usuarios/${usuarioActual.id}/resultados/${categoriaSeleccionada.id}`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                aprobada: respuestasCorrectas == cantidadPreguntas,
                correctas: respuestasCorrectas,
                incorrectas: cantidadPreguntas - respuestasCorrectas
            })
        }
    );

    const resultadoJson = await resultado.json();
    console.log("Resultado Backend: ", resultadoJson);

    await obtenerDetallesUsuarioSeleccionado(usuarioActual.id);
    renderizarUsuarioSeleccionado(usuarioActual.id);
}

const renderizarUsuarioSeleccionado = (idUsuario) => {
    console.log("Usuario seleccionado: ", usuarioActual);
    categorias.forEach(categoria => {
        document.getElementById('categoria-'+categoria.id).classList.remove('aprobada');
    });

    // Marcar las categorias aprobadas
    usuarioActual.resultados.forEach(resultado => {
        if (resultado.aprobada){
            document.getElementById('categoria-'+resultado.category).classList.add('aprobada');
        }
    });

    document.getElementById("img-usuario").attributes.src.value = `assets/img/${usuarioActual.imagenPerfil}`;
    document.getElementById("contador-coronas").innerText = usuarioActual.coronas;
    document.getElementById("contador-vidas").innerText = usuarioActual.vidas;
}

const renderizarSiguientePregunta = () => {
    preguntaContestada = false;
    indicePreguntaActual++;
    renderizarPregunta(idCategoriaActual, indicePreguntaActual);
}

const verificarRespuesta = (palabra, correcta, etiqueta) => {
    if (preguntaContestada) 
        return;
    console.log("Respuesta seleccionada: ", palabra, "Correcta: ", correcta);
    if (correcta) {
        etiqueta.classList.add("correcta");
        respuestasCorrectas++;
    } else {
        etiqueta.classList.add("incorrecta");
        if (usuarioActual.vidas > 0) {
            usuarioActual.vidas--;
            document.getElementById("contador-vidas").innerText = usuarioActual.vidas;
        }
    }
    preguntaContestada = true;
    console.log("Respuestas correctas hasta ahora: ", respuestasCorrectas); 
}


