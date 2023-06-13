var esconder = true;
document.addEventListener("DOMContentLoaded", function() {
    var textarea = document.getElementById("ingresado");
    textarea.focus();
});

function esconder_mostrar(){
    document.getElementById("no_encontrado_id").style.display = "none";
    document.getElementById("boton_copiar").style.display = "block";
    
}

function encriptar(){
    var texto_encriptado="";
    var texto = document.getElementById("ingresado").value;

    if(esconder){
        esconder_mostrar();
        esconder = false;
    }

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

    var div_encriptado = document.getElementById("cajita_id");
    div_encriptado.textContent = texto_encriptado;

    var textarea = document.getElementById("ingresado");
    textarea.focus();
}
