const textarea = document.getElementById("text__area__output");
const imgArea=document.getElementById("img_boneco");
const textosDeTextAreaVazio=document.getElementsByClassName("texto__de__alerta");
const textAreaInput=document.getElementById("text_area_input");

function limparTextAreaInput(){
    textAreaInput.value="";
}

function limparTextAreaOutput(){
    textarea.value="";
}

function verificarTextarea() {
    textarea.disabled = true;
    imgArea.style.display="block";
}
  


function btnCripotragrafar(){
    let msgNormal=document.getElementById("text_area_input").value;
    if (msgNormal.includes("e")) {
        msgNormal = msgNormal.replace(/e/g, "enter");
    }
    if (msgNormal.includes("i")) {
        msgNormal = msgNormal.replace(/i/g, "imes");
    }
    if (msgNormal.includes("a")) {
        msgNormal = msgNormal.replace(/a/g, "ai");
    }
    if (msgNormal.includes("o")) {
        msgNormal = msgNormal.replace(/o/g, "ober");
    }
    if (msgNormal.includes("u")) {
        msgNormal = msgNormal.replace(/u/g, "ufat");
    }
    let textAreaOutput=document.getElementById("text__area__output");
    textAreaOutput.value=msgNormal
    
    
    if(textAreaOutput.value.trim()==="" && textAreaInput.value.trim()===""){
        verificarTextarea();
        for(let i=0;i<textosDeTextAreaVazio.length;i++){
            textosDeTextAreaVazio[i].style.display="flex";
        }   

    }
    else{
        imgArea.style.display="none";
        limparTextAreaInput()
        for(let i=0;i<textosDeTextAreaVazio.length;i++){
            textosDeTextAreaVazio[i].style.display="none";
        }   

    }
}





function btnDescriptografar(){
    let msgCriptografada=document.getElementById("text_area_input").value;
    if (msgCriptografada.includes("enter")) {
        msgCriptografada = msgCriptografada.replace(/enter/g, "e");
    }
    if (msgCriptografada.includes("imes")) {
        msgCriptografada = msgCriptografada.replace(/imes/g, "i");
    }
    if (msgCriptografada.includes("ai")) {
        msgCriptografada = msgCriptografada.replace(/ai/g, "a");
    }
    if (msgCriptografada.includes("ober")) {
        msgCriptografada = msgCriptografada.replace(/ober/g, "o");
    }
    if (msgCriptografada.includes("ufat")) {
        msgCriptografada = msgCriptografada.replace(/ufat/g, "u");
    }

    let textAreaOutput=document.getElementById("text__area__output");
    textAreaOutput.value=msgCriptografada;
}
    


function btnCopiar(){
    let msgCriptografada = document.getElementById('text__area__output');
        navigator.clipboard.writeText(msgCriptografada.value)
          .then(() => {
            alert('Texto copiado para a área de transferência!');
          })
          .catch(err => {
            console.error('Erro ao copiar texto: ', err);
          });

}




