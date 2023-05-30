

    const textInput = document.getElementById("inputTexts");
function conprobar(valor){
let divCapa1 = document.querySelector(".capa1")
let divCapa2 = document.querySelector(".capa2")
  if (valor.length === 0) {
        divCapa1.style.display = "";
        divCapa2.style.display = "none";
    } else {
        divCapa1.style.display = "none";
        divCapa2.style.display = "flex";
    }
}    
  
    
document.getElementById("encriptar").addEventListener("click", encript);   
document.getElementById("desencriptar").addEventListener("click", desencript);   
document.getElementById('copyText').addEventListener('click', copiarTexto)

function encript() {
    let valorTextInput = textInput.value;
    valorTextInput = valorTextInput.toLowerCase()
    conprobar(valorTextInput)

    let arrayCodigo = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat'],]
    
    for (let i=0;i<arrayCodigo.length;i++){
        if(valorTextInput.includes(arrayCodigo[i][0])){
            valorTextInput = valorTextInput.replaceAll(arrayCodigo[i][0],arrayCodigo[i][1])
        }
    }
    document.getElementById('textShow').innerHTML = valorTextInput
    }
    function desencript() {
        let valorTextInput = textInput.value;
        valorTextInput = valorTextInput.toLowerCase()
        conprobar(valorTextInput)
    
        let arrayCodigo = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat'],]
        
        for (let i=0;i<arrayCodigo.length;i++){
            if(valorTextInput.includes(arrayCodigo[i][1])){
                valorTextInput = valorTextInput.replaceAll(arrayCodigo[i][1],arrayCodigo[i][0])
            }
        }
        document.getElementById('textShow').innerHTML = valorTextInput
        }
        function copiarTexto() {
            const texto = document.getElementById('textShow').textContent
            navigator.clipboard.writeText(texto)
    
        }
   

