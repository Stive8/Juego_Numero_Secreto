let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    console.log(numeroSecreto);
    console.log(intentos);


    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        limpiarCaja();

        if (numeroDeUsuario > numeroSecreto) {

            asignarTextoElemento("p", "El numero Secreto es Menor");

        } else {

            asignarTextoElemento("p", "El numero Secreto es Mayor");
        }
        intentos++;

    }

    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {


        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();

        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {

    limpiarCaja();
    condicionesIniciales();
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del Numero Secreto");
    asignarTextoElemento("p", `Indica un Numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.querySelector("#reiniciar").setAttribute("disabled", "true");


}


condicionesIniciales();
