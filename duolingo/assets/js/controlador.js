console.log("Categorias: ", categorias);
console.log("Usuarios: ", usuarios);
var indicePreguntaActual = 0;
var idCategoriaActual = null;
var respuestasCorrectas = 0;
var preguntaContestada = false;


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
                        <div class="opcion-usuario" onclick="renderizarUsuarioSeleccionado(${usuarios[i].id}); mostrarSeccionCategorias()">
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

const renderizarPregunta = (idCategoria, indicePregunta) => {
    idCategoriaActual = idCategoria;
    const categoriaSeleccionada = categorias.find(categoria => categoria.id === idCategoria);
    console.log("Categoria seleccionada: ", categoriaSeleccionada);

    if (indicePregunta >= categoriaSeleccionada.preguntas.length) {
        alert("¡Has completado la categoría!");
        indicePreguntaActual = 0;
        mostrarSeccionCategorias();
        return;
    }
    const preguntaSeleccionada = categoriaSeleccionada.preguntas[indicePregunta]; //Por ahora solo la primera pregunta
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
    document.getElementById("numero-pregunta-total").innerText = categoriaSeleccionada.preguntas.length;
}

const renderizarUsuarioSeleccionado = (idUsuario) => {
    const usuarioSeleccionado = usuarios.find(usuario => usuario.id === idUsuario);
    console.log("Usuario seleccionado: ", usuarioSeleccionado);
    categorias.forEach(categoria => {
        document.getElementById('categoria-'+categoria.id).classList.remove('aprobada');
    });


    // Marcar las categorias aprobadas
    usuarioSeleccionado.resultados.forEach(resultado => {
        if (resultado.aprobada){
            document.getElementById('categoria-'+resultado.category).classList.add('aprobada');
        }
    });


    document.getElementById("img-usuario").attributes.src.value = `assets/img/${usuarioSeleccionado.imagenPerfil}`;
    document.getElementById("contador-coronas").innerText = usuarioSeleccionado.coronas;
    document.getElementById("contador-vidas").innerText = usuarioSeleccionado.vidas;
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
    }
    preguntaContestada = true;
    console.log("Respuestas correctas hasta ahora: ", respuestasCorrectas); 
}
renderizarListaCategorias();
renderizarListaUsuarios();
