//Variables html
const textArea = document.querySelector(".text"); 
const mensaje = document.querySelector(".message");
const image = document.querySelector(".image_doll");
const copia = document.querySelector(".copiar");
const borra = document.querySelector(".borrar");

//Copiar buttom first action (no-appearing)
copia.style.display = "none"
borra.style.display = "none"

//First function: Text validation
function validarTexto(){
    let textoEscrito = document.querySelector(".text").value; //Select text
    let validador = textoEscrito.match(/^[a-z]*$/); //check if it's lowercase and nth else

    if(!validador || validador === 0) { //validor don't match with lowercase or it's empty
        alert("Solo son permitidas letras minúsculas y sin acentos") //Message pop-up
        location.reload(); //Restart page
        return false; //It's wrong
    } else{
        return true; //It's correct
    }
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; //Matrix of interchange
    //La letra "a" es convertida para "ai", "e" es convertida para "enter", "i" es convertida para "imes", "o" es convertida para "ober" y "u" es convertida para "ufat"
    stringEncriptada = stringEncriptada.toLowerCase(); //Force to lowercase

    for(let i = 0; i < matrizCodigo.length; i++){ //Go through the matrix
        if(stringEncriptada.includes(matrizCodigo[i][0])){ //Looking for initials to exchange
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]); //Exchange or replace (encrypt)
        }
    }
    return stringEncriptada;
}

function btnEncriptar(){
    if(validarTexto()) {
        const textoEncriptado = encriptar(textArea.value); //Encryptation value
        mensaje.value = textoEncriptado;
        image.style.display = "none"; //Clean background image
        textArea.value = ""; //Clean
        copia.style.display = "block";
        borra.style.display = "block";
    }
}

function desencriptar(stringDesencriptada){ //Same logic btnEncriptar but in reverse
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function btnDesencriptar(){
    if (validarTexto()){
        const textoEncriptado = desencriptar(textArea.value);
        mensaje.value = textoEncriptado;
        image.style.display = "none" //Clean background image
        textArea.value = ""; //Clean
        copia.style.display = "block";
        borra.style.display = "block";
    }
}

function copiar(){
    mensaje.select(); //Select message
    navigator.clipboard.writeText(mensaje.value) //Add to clipboard (copy text)
    alert("Texto Copiado") //Throw an alert  (pop-up)
    copia.style.display = "none";
    borra.style.display = "none";
}

function borrar(){
    mensaje.select(); //Select message
    mensaje.value = ""; //Clean
    alert("Texto borrado") //Throw an alert  (pop-up)
    copia.style.display = "none";
    borra.style.display = "none";
    image.style.display = "block"; //Clean background image
}

