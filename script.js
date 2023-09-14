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
    let textoEscrito = document.querySelector(".text").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; //Matrix of interchange
    stringEncriptada = stringEncriptada.toLowerCase(); //Force to lowercase

    for(let i = 0; i < matrizCodigo.length; i++){ //Go through the matrix
        if(stringEncriptada.includes(matrizCodigo[i][0])){ //Looking for initials to exchange
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]); //Exchange or replace (encrypt)
        }
    }
    return stringEncriptada;
}

function btnEncriptar(){
    //if(!validarTexto()) {
    const textoEncriptado = encriptar(textArea.value); //Encryptation value
    mensaje.value = textoEncriptado;
    image.style.display = "none" //Clean background image
    textArea.value = ""; //Clean
    copia.style.display = "block";
    borra.style.display = "block";
    //}
}

function desencriptar(stringDesencriptada){
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
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    image.style.display = "none" //Clean background image
    textArea.value = ""; //Clean
    copia.style.display = "block";
    borra.style.display = "block";
}

function copiar(){
    mensaje.select(); //Select message
    navigator.clipboard.writeText(mensaje.value) //Add to clipboard (copy text)
    mensaje.value = ""; //Clean message
    alert("Texto Copiado") //Throw an alert  (pop-up)
    copia.style.display = "none";
    borra.style.display = "none";
}

function borrar(){
    mensaje.select(); //Select message
    mensaje.value = ""; //Clean
    copia.style.display = "none";
    borra.style.display = "none";
}

