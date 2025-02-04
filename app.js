
let numeroSecreto = 0;
let intentos = 0;
tentativas = 0;
console.log(numeroSecreto)

function asignarTexto(element, text){
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text
}

function verificarIntento(){

    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    intentos--;
    tentativas++;

    //Verificamos si quedan intentos
    if (intentos === 0){
        asignarTexto(
            'p',
            'Te quedaste sin intentos'
        );
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
    }

    if (numeroUsuario === numeroSecreto){
        asignarTexto(
            element = 'p',
            text = `Felicidades, acertaste en ${tentativas} ${tentativas == 1 ? 'intento' : 'intentos'}`
        )
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto > numeroUsuario){
            asignarTexto(
                'p',
                `El numero secreto es mayor <br> Te ${intentos > 1 ? 'quedan' : 'queda'} ${intentos} ${intentos > 1 ? 'intentos' : 'intento'}`
            );
        } else{
            asignarTexto(
                'p',
                `El numero secreto es menor <br> Te ${intentos > 1 ? 'quedan' : 'queda'} ${intentos} ${intentos > 1 ? 'intentos' : 'intento'}`
            );
        } limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    return document.querySelector('#valorUsuario').value = '';
}

function genNumeroSecreto(){
    return Math.floor(Math.random()*10) + 1
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
}

function condicionesIniciales(){
    numeroSecreto = genNumeroSecreto();
    intentos = 4;
    tentativas = 0;
    asignarTexto(
        element = 'h1',
        text = `Adivina el numero secreto`
    )
    asignarTexto(
        element = 'p',
        text = `Escribe un numero del 1 al 10\nTienes ${intentos} ${intentos > 1 ? 'intentos' : 'intento'}`
    )
    document.getElementById(valorUsuario).setAttribute('disable','true');
}

condicionesIniciales();



