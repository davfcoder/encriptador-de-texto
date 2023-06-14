var esconder = true;
var div_cajita;
var textarea;
var texto_encriptado ="";
var texto_desencriptado ="";

var caracteres_permitidos = /[a-z\s]+/;
var aux_mensaje;

document.addEventListener("DOMContentLoaded", function() {
    textarea = document.getElementById("ingresado");
    textarea.focus();
});

function enfocar(){
    textarea = document.getElementById("ingresado");
    textarea.focus();
}

function mostrar(){
    if(esconder){
        esconder = false;
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

function boton_desencriptar(){
    texto = document.getElementById("ingresado").value;
    div_cajita = document.getElementById("cajita_id");
    texto_desencriptado = "";

    // var aux_desencriptar = "";
    
    // var cont = 0;
    // var keys = ["ai","enter","imes", "ober", "ufat"];
    if (texto != ""){
        for (var x = 0; x < texto.length; x++){
            if (caracteres_permitidos.test(texto[x]) == false){
               aux_mensaje = false; 
               break;
            }
        }
        if(aux_mensaje){  
            mostrar();
            // for(var i =0; i < texto_encriptado.length; i++){
            
            //     for(var j = cont; j < keys[0].length + cont; j++){
            //         aux_desencriptar = texto_encriptado[j] + aux_desencriptar; 
            //     }
            //     if(aux_desencriptar == keys[0]){
            //         texto_desencriptado = texto_encriptado[i] + aux_desencriptar
            //     }
            //     cont ++;
            // }
            div_cajita.textContent = texto;
            texto_desencriptado = texto;
        }else{
            alert("Por favor, ingresa únicamente palabras con letras minúsculas y sin acentos");
        }

    }else if(texto_desencriptado != div_cajita.textContent && (texto_encriptado != "" || texto_desencriptado != "")){
    mostrar();
    texto_desencriptado = "carro";
        // for(var i =0; i < texto_encriptado.length; i++){
        
        //     for(var j = cont; j < keys[0].length + cont; j++){
        //         aux_desencriptar = texto_encriptado[j] + aux_desencriptar; 
        //     }
        //     if(aux_desencriptar == keys[0]){
        //         texto_desencriptado = texto_encriptado[i] + aux_desencriptar
        //     }
        //     cont ++;
        // } 
        div_cajita = document.getElementById("cajita_id");
        div_cajita.textContent = texto_desencriptado;
    }
    enfocar()
    }