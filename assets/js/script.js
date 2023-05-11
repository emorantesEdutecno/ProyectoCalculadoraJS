// variables globales que podrán ser utilizadas por cualquier función
var operacion = '';
var numero1 = 0;
var numero2 = 0;
var resutado = 0;
var banderaNuevoValor = false;


function recuperarValor(){
    let laPantalla = document.getElementById('pantallaResultado');
    if( banderaNuevoValor == true){
        laPantalla .value = '0';
        banderaNuevoValor = false;
    }

    let valorPantallaString = document.getElementById('pantallaResultado').value;
    // let valorPantallaInt = parseInt(valorPantallaString);
    let cantidadCaracteres = valorPantallaString.length;
    if(valorPantallaString == '0'){
        // retornamos un valor de centinela avisando que el elemento en pantalla es cero
        return -100
    }
    if(cantidadCaracteres < 15){
        return valorPantallaString;
    }
    else{
        alert('Ha superado el límite de caracteres de la pantalla');
        // retornamos un valor de centinela avisando que se llegó al límite
        return -99;
    }    
}

function accionBoton1(){
    let laPantalla = document.getElementById('pantallaResultado');
    let valorAnteriorPantalla = recuperarValor();
    // console.log('El valor anterior de la pantalla: '+valorAnteriorPantalla);
    if(valorAnteriorPantalla != -99){

        if(valorAnteriorPantalla == -100){
            // el operador mas (+) en datos string sirve como CONCATENADOR
            let nuevoValorPantalla = '1';
            // console.log('El nuevo valor de la pantalla: '+nuevoValorPantalla);
            laPantalla.value = nuevoValorPantalla;
        }
        else{
             // el operador mas (+) en datos string sirve como CONCATENADOR
            let nuevoValorPantalla = valorAnteriorPantalla + '1';
            // console.log('El nuevo valor de la pantalla: '+nuevoValorPantalla);
            laPantalla.value = nuevoValorPantalla;
        }
    }
}

function accionBoton2(){
    let laPantalla = document.getElementById('pantallaResultado');
    let valorAnteriorPantalla = recuperarValor();
    // console.log('El valor anterior de la pantalla: '+valorAnteriorPantalla);
    if(valorAnteriorPantalla != -99){

        if(valorAnteriorPantalla == -100){
            // el operador mas (+) en datos string sirve como CONCATENADOR
            let nuevoValorPantalla = '2';
            // console.log('El nuevo valor de la pantalla: '+nuevoValorPantalla);
            laPantalla.value = nuevoValorPantalla;
        }
        else{
             // el operador mas (+) en datos string sirve como CONCATENADOR
            let nuevoValorPantalla = valorAnteriorPantalla + '2';
            // console.log('El nuevo valor de la pantalla: '+nuevoValorPantalla);
            laPantalla.value = nuevoValorPantalla;
        }
    }
}

function accionBoton3(){
    let laPantalla = document.getElementById('pantallaResultado');
    let valorAnteriorPantalla = recuperarValor();
    // console.log('El valor anterior de la pantalla: '+valorAnteriorPantalla);
    if(valorAnteriorPantalla != -99){

        if(valorAnteriorPantalla == -100){
            // el operador mas (+) en datos string sirve como CONCATENADOR
            let nuevoValorPantalla = '3';
            // console.log('El nuevo valor de la pantalla: '+nuevoValorPantalla);
            laPantalla.value = nuevoValorPantalla;
        }
        else{
             // el operador mas (+) en datos string sirve como CONCATENADOR
            let nuevoValorPantalla = valorAnteriorPantalla + '3';
            // console.log('El nuevo valor de la pantalla: '+nuevoValorPantalla);
            laPantalla.value = nuevoValorPantalla;
        }
    }
}



function accionBoton4(){
    let laPantalla = document.getElementById('pantallaResultado');
    let valorAnteriorPantalla = recuperarValor();
    // console.log('El valor anterior de la pantalla: '+valorAnteriorPantalla);
    // el operador mas (+) en datos string sirve como CONCATENADOR
    if(valorAnteriorPantalla != -99){

        if(valorAnteriorPantalla == -100){
            // el operador mas (+) en datos string sirve como CONCATENADOR
            let nuevoValorPantalla = '4';
            // console.log('El nuevo valor de la pantalla: '+nuevoValorPantalla);
            laPantalla.value = nuevoValorPantalla;
        }
        else{
             // el operador mas (+) en datos string sirve como CONCATENADOR
            let nuevoValorPantalla = valorAnteriorPantalla + '4';
            // console.log('El nuevo valor de la pantalla: '+nuevoValorPantalla);
            laPantalla.value = nuevoValorPantalla;
        }
    }
}


function accionBoton5(){
    let laPantalla = document.getElementById('pantallaResultado');
    let valorAnteriorPantalla = recuperarValor();
    // console.log('El valor anterior de la pantalla: '+valorAnteriorPantalla);
    if(valorAnteriorPantalla != -99){

        if(valorAnteriorPantalla == -100){
            // el operador mas (+) en datos string sirve como CONCATENADOR
            let nuevoValorPantalla = '5';
            // console.log('El nuevo valor de la pantalla: '+nuevoValorPantalla);
            laPantalla.value = nuevoValorPantalla;
        }
        else{
             // el operador mas (+) en datos string sirve como CONCATENADOR
            let nuevoValorPantalla = valorAnteriorPantalla + '5';
            // console.log('El nuevo valor de la pantalla: '+nuevoValorPantalla);
            laPantalla.value = nuevoValorPantalla;
        }
    }
}

function accionBoton6(){
    let laPantalla = document.getElementById('pantallaResultado');
    let valorAnteriorPantalla = recuperarValor();
    // console.log('El valor anterior de la pantalla: '+valorAnteriorPantalla);
    if(valorAnteriorPantalla != -99){

        if(valorAnteriorPantalla == -100){
            // el operador mas (+) en datos string sirve como CONCATENADOR
            let nuevoValorPantalla = '6';
            // console.log('El nuevo valor de la pantalla: '+nuevoValorPantalla);
            laPantalla.value = nuevoValorPantalla;
        }
        else{
             // el operador mas (+) en datos string sirve como CONCATENADOR
            let nuevoValorPantalla = valorAnteriorPantalla + '6';
            // console.log('El nuevo valor de la pantalla: '+nuevoValorPantalla);
            laPantalla.value = nuevoValorPantalla;
        }
    }
}

function accionBoton7(){
    let laPantalla = document.getElementById('pantallaResultado');
    let valorAnteriorPantalla = recuperarValor();
    // console.log('El valor anterior de la pantalla: '+valorAnteriorPantalla);
    if(valorAnteriorPantalla != -99){

        if(valorAnteriorPantalla == -100){
            // el operador mas (+) en datos string sirve como CONCATENADOR
            let nuevoValorPantalla = '7';
            // console.log('El nuevo valor de la pantalla: '+nuevoValorPantalla);
            laPantalla.value = nuevoValorPantalla;
        }
        else{
             // el operador mas (+) en datos string sirve como CONCATENADOR
            let nuevoValorPantalla = valorAnteriorPantalla + '7';
            // console.log('El nuevo valor de la pantalla: '+nuevoValorPantalla);
            laPantalla.value = nuevoValorPantalla;
        }
    }
}

function accionBoton8(){
    let laPantalla = document.getElementById('pantallaResultado');
    let valorAnteriorPantalla = recuperarValor();
    // console.log('El valor anterior de la pantalla: '+valorAnteriorPantalla);
    if(valorAnteriorPantalla != -99){

        if(valorAnteriorPantalla == -100){
            // el operador mas (+) en datos string sirve como CONCATENADOR
            let nuevoValorPantalla = '8';
            // console.log('El nuevo valor de la pantalla: '+nuevoValorPantalla);
            laPantalla.value = nuevoValorPantalla;
        }
        else{
             // el operador mas (+) en datos string sirve como CONCATENADOR
            let nuevoValorPantalla = valorAnteriorPantalla + '8';
            // console.log('El nuevo valor de la pantalla: '+nuevoValorPantalla);
            laPantalla.value = nuevoValorPantalla;
        }
    }
}

function accionBoton9(){
    let laPantalla = document.getElementById('pantallaResultado');
    let valorAnteriorPantalla = recuperarValor();
    // console.log('El valor anterior de la pantalla: '+valorAnteriorPantalla);
    if(valorAnteriorPantalla != -99){

        if(valorAnteriorPantalla == -100){
            // el operador mas (+) en datos string sirve como CONCATENADOR
            let nuevoValorPantalla = '9';
            // console.log('El nuevo valor de la pantalla: '+nuevoValorPantalla);
            laPantalla.value = nuevoValorPantalla;
        }
        else{
             // el operador mas (+) en datos string sirve como CONCATENADOR
            let nuevoValorPantalla = valorAnteriorPantalla + '9';
            // console.log('El nuevo valor de la pantalla: '+nuevoValorPantalla);
            laPantalla.value = nuevoValorPantalla;
        }
    }
}

function accionBoton0(){
    let laPantalla = document.getElementById('pantallaResultado');
    let valorAnteriorPantalla = recuperarValor();
    // console.log('El valor anterior de la pantalla: '+valorAnteriorPantalla);
    if(valorAnteriorPantalla != -99){

        if(valorAnteriorPantalla == -100){
            // el operador mas (+) en datos string sirve como CONCATENADOR
            let nuevoValorPantalla = '0';
            // console.log('El nuevo valor de la pantalla: '+nuevoValorPantalla);
            laPantalla.value = nuevoValorPantalla;
        }
        else{
             // el operador mas (+) en datos string sirve como CONCATENADOR
            let nuevoValorPantalla = valorAnteriorPantalla + '0';
            // console.log('El nuevo valor de la pantalla: '+nuevoValorPantalla);
            laPantalla.value = nuevoValorPantalla;
        }
    }
}


function accionBotonSuma(){
    operacion = '+';
    numero1 = recuperarValor();
    banderaNuevoValor = true;
}

function accionBotonResta(){
    operacion = '-';
    numero1 = recuperarValor();
    banderaNuevoValor = true;
}

function enviarAPantalla(dato){
    let laPantalla = document.getElementById('pantallaResultado');
    let datoString = dato.toString();
    laPantalla.value = datoString;

}

function accionBotonIgual(){
    banderaNuevoValor = false;
    numero2 = recuperarValor();

    if( operacion == '+'){
        resultado = parseInt(numero1) + parseInt(numero2);
        
    }
    else if(operacion == '-'){
        resultado = parseInt(numero1) - parseInt(numero2);
    }
    enviarAPantalla(resultado); 
}

function accionBotonAC(){
    let laPantalla = document.getElementById('pantallaResultado');
    laPantalla.value = '0';
}


function asignarEventos(){
    let elBoton1 = document.getElementById('boton1');
    elBoton1.addEventListener('click', accionBoton1 );

    let elBoton2 =document.getElementById('boton2');
    elBoton2.addEventListener('click', accionBoton2);

    let elBoton3 =document.getElementById('boton3');
    elBoton3.addEventListener('click', accionBoton3);

    let elBoton4 =document.getElementById('boton4');
    elBoton4.addEventListener('click', accionBoton4);

    let elBoton5 =document.getElementById('boton5');
    elBoton5.addEventListener('click', accionBoton5);

    let elBoton6 =document.getElementById('boton6');
    elBoton6.addEventListener('click', accionBoton6);

    let elBoton7 =document.getElementById('boton7');
    elBoton7.addEventListener('click', accionBoton7);

    let elBoton8 =document.getElementById('boton8');
    elBoton8.addEventListener('click', accionBoton8);

    let elBoton9 =document.getElementById('boton9');
    elBoton9.addEventListener('click', accionBoton9);

    let elBoton0 =document.getElementById('boton0');
    elBoton0.addEventListener('click', accionBoton0);

    let elBotonSuma = document.getElementById('suma');
    elBotonSuma.addEventListener('click', accionBotonSuma );

    let elBotonResta = document.getElementById('resta');
    elBotonResta.addEventListener('click', accionBotonResta );

    let elBotonIgual = document.getElementById('igual');
    elBotonIgual.addEventListener('click', accionBotonIgual);

    let elBotonAC = document.getElementById('ac');
    elBotonAC.addEventListener('click', accionBotonAC);

    
}