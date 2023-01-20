const rega = /ai/g;
const rege = /enter/g;
const regi = /imes/g;
const rego = /ober/g;
const regu = /ufat/g;
const regaAcento = /á/g;
const regeAcento = /é/g;
const regiAcento = /í/g;
const regoAcento = /ó/g;
const reguAcento = /ú/g;

function numMinus(e) {
    let texto = e.value;
    texto = texto.toLowerCase();
    texto = texto.split(/[^a-zñ\s]+$/g);
    texto = texto.join("");
    texto = texto.replace(regaAcento, "a");
    texto = texto.replace(regeAcento, "e");
    texto = texto.replace(regiAcento, "i");
    texto = texto.replace(regoAcento, "o");
    texto = texto.replace(reguAcento, "u");
    e.value = texto;
}
function cifrar() {
    let textoEncriptar = document.getElementById("textarea1").value;
    let arrayPalabras = textoEncriptar.split("");
    if (textoEncriptar.trim() === "") {
        document.getElementsByClassName("textoEnImagen")[0].style.display = "flex";
    } else {
        for (let i = 0; i < arrayPalabras.length; i++) {
            if (arrayPalabras[i] == "a") {
                arrayPalabras[i] = "ai";
            }
            if (arrayPalabras[i] == "e") {
                arrayPalabras[i] = "enter";
            }
            if (arrayPalabras[i] == "i") {
                arrayPalabras[i] = "imes";
            }
            if (arrayPalabras[i] == "o") {
                arrayPalabras[i] = "ober";
            }
            if (arrayPalabras[i] == "u") {
                arrayPalabras[i] = "ufat";
            }
        }
        document.getElementById("textarea2").innerHTML = arrayPalabras.join("").toLowerCase();
        document.getElementById("textarea2").focus();
        document.getElementById("contenedorImagen").style.display = "none";
        document.getElementsByClassName("contenedorTextarea2")[0].style.display = "flex";
    }
}
function descifrar() {
    let textoDesencriptar = document.getElementById("textarea1").value;
    let textoDescifrado = "";
    if (textoDesencriptar.trim() === "") {
        document.getElementsByClassName("textoEnImagen")[0].style.display = "flex";
    } else {
        textoDescifrado = textoDesencriptar.replace(rega, "a");
        textoDescifrado = textoDescifrado.replace(rege, "e");
        textoDescifrado = textoDescifrado.replace(regi, "i");
        textoDescifrado = textoDescifrado.replace(rego, "o");
        textoDescifrado = textoDescifrado.replace(regu, "u");
        document.getElementById("contenedorImagen").style.display = "none";
        document.getElementsByClassName("contenedorTextarea2")[0].style.display = "flex";
        document.getElementById("textarea2").focus();
        document.getElementById("textarea2").innerHTML = textoDescifrado;
    }
}
function alPortapapeles() {
    let contenido = document.getElementById("textarea2").innerHTML;
    if (contenido.trim() === "") {
        document.getElementsByClassName("textoEnImagen")[0].style.display = "none";
        document.getElementsByClassName("textoEnImagen1")[0].style.display = "flex";
    } else {
        textarea2;
        navigator.clipboard
            .writeText(contenido)
            .then(() => {
                console.log("Text copied to clipboard...");
            })
            .catch((err) => {
                console.log("Something went wrong", err);
            });
        document.getElementById("contBotoncopiado").style.display = "flex";
        setTimeout(function () {
            document.getElementsByClassName("contBotoncopiar")[0].style.display = "flex";
            document.getElementById("contBotoncopiado").style.display = "none";
        }, 2200);
    }
}
function recargar() {
    location.reload();
}
function limpiarInput1() {
    document.getElementById("textarea1").value = "";
    document.getElementById("textarea1").focus();
}
function limpiarInput2() {
    document.getElementById("textarea2").value = "";
    document.getElementById("textarea2").focus();
}
