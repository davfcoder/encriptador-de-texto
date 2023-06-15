var mostrar_boton = true;
var div_cajita;
var textarea;
var texto_encriptado ="";
var texto_desencriptado ="";
var opcion = "";
var caracteres_permitidos = /[a-z\s]+/;
var aux_mensaje;
var texto_aux;

document.addEventListener("DOMContentLoaded", function() {
    textarea = document.getElementById("ingresado");
    textarea.focus();
});

function enfocar(){
    textarea = document.getElementById("ingresado");
    textarea.focus();
}

function mostrar(){
    if(mostrar_boton){
        mostrar_boton = false;
        document.getElementById("boton_copiar").style.display = "block";
    }
}

function encriptar(texto,div_cajita){
    mostrar();
    texto_encriptado="";
    for(var i = 0; i < texto.length; i++){
        switch(texto[i]){
            case "a":
                texto_encriptado = texto_encriptado + "ai";
                break;
            case "e":
                texto_encriptado = texto_encriptado + "enter";
                break;
            case "i":
                texto_encriptado = texto_encriptado + "imes";
                break;
            case "o":
                texto_encriptado = texto_encriptado + "ober";
                break;
            case "u":
                texto_encriptado = texto_encriptado + "ufat";
                break;
            default:
                texto_encriptado = texto_encriptado + texto[i];
                break;
        }
    }
    div_cajita.textContent = texto_encriptado;
    opcion = "encriptado"
}

function boton_encriptar(){
    texto = document.getElementById("ingresado").value;
    div_cajita = document.getElementById("cajita_id");
    aux_mensaje = true;
    
    if (texto != ""){
        for (var x = 0; x < texto.length; x++){
            if (caracteres_permitidos.test(texto[x]) == false){
               aux_mensaje = false; 
               break;
            }
        }
        if(aux_mensaje){
            encriptar(texto,div_cajita);
        }else{
            alert("Por favor, ingresa únicamente palabras con letras minúsculas y sin acentos");
        }

    }else if(texto_encriptado != div_cajita.textContent && (texto_encriptado != "" || texto_desencriptado != "")){
        texto = div_cajita.textContent;
        encriptar(texto,div_cajita);

    }
    enfocar();
}

function desencriptar(texto,div_cajita){
    mostrar();
    texto_desencriptado = "";
    for(var i = 0; i < texto.length; i++){
        texto_aux = "";
        for(var j = 0; j < 5; j++){
            texto_aux = texto_aux + texto[i+j];
            if(texto_aux == "ai"){
                texto_desencriptado = texto_desencriptado + "a";
                i = i + 1;
                break;
            }else if(texto_aux == "enter"){
                texto_desencriptado = texto_desencriptado + "e";
                i = i + 4;
                break;
            }else if(texto_aux == "imes"){
                texto_desencriptado = texto_desencriptado + "i";
                i = i + 3;
                break;
            }else if(texto_aux == "ober"){
                texto_desencriptado = texto_desencriptado + "o";
                i = i + 3;
                break;
            }else if(texto_aux == "ufat"){
                texto_desencriptado = texto_desencriptado + "u";
                i = i + 3;
                break;
            }else if(j == 4){
                texto_desencriptado = texto_desencriptado + texto[i];
                break;
            }
        }
    }
    div_cajita.textContent = texto_desencriptado;
    opcion = "desencriptado";
}

function boton_desencriptar(){
    texto = document.getElementById("ingresado").value;
    div_cajita = document.getElementById("cajita_id");
    aux_mensaje = true;

    if (texto != ""){
        for (var x = 0; x < texto.length; x++){
            if (caracteres_permitidos.test(texto[x]) == false){
               aux_mensaje = false; 
               break;
            }
        }
        if(aux_mensaje){
            desencriptar(texto,div_cajita);
        }else{
            alert("Por favor, ingresa únicamente palabras con letras minúsculas y sin acentos");
        }

    }else if(texto_desencriptado != div_cajita.textContent && (texto_encriptado != "" || texto_desencriptado != "")){
        texto = div_cajita.textContent;
        desencriptar(texto,div_cajita);
    }

    enfocar();

}

function boton_copiar(){
    navigator.clipboard.writeText(div_cajita.textContent).then(() => {
        alert("El texto " + opcion + " fue copiado con éxito")
        enfocar();
    }, () => {
        /* clipboard write failed */
      });
}