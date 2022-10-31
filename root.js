let _nameEvento = "Nome do evento"
let _imgMain = "url(img/img-1.png)"
let _horaEvento = "22hrs"
let _localEvento = "Casa da sua irmã"
let _diaEvento = "31 de Outubro"






let nomeEvento = document.querySelectorAll(".nameEvento")

console.log("_nameEvento: ");
console.log(nomeEvento.length);

for (let i = 0; i < nomeEvento.length; i++) {
    nomeEvento[i].innerHTML = _nameEvento
    
}

let imgMain = document.getElementById("imagem")
imgMain.style.backgroundImage = _imgMain

let horaEvento = document.getElementById("horaEvento")
horaEvento.innerHTML = _horaEvento

let localEvento = document.getElementById("localEvento")
localEvento.innerHTML = _localEvento

let diaEvento = document.getElementById("diaEvento")
diaEvento.innerHTML = _diaEvento
