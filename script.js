
function btnComprar(){
    window.location.href = "telaPagamento.html"
}

document.getElementById("tel").addEventListener("keypress", function(e){
    telValueLength = document.getElementById("tel").value.length;
    console.log(telValueLength);
    if (telValueLength === 2) {
        document.getElementById("tel").value = "(" + document.getElementById("tel").value + ") "
    }
})
function mudarCorBtnCompra(bnt, label){
    var listIconPay = document.querySelectorAll(".iconPay");
    var listContainerPay = document.querySelectorAll(".containerPay");
    var listLabel = document.querySelectorAll(".ipmdye");
    
    for (let i = 0; i < listIconPay.length; i++) {
        listIconPay[i].style.fill = "black";
        listContainerPay[i].style.display = "none";
        listLabel[i].style.backgroundColor= 'transparent';
    }

    document.getElementById(bnt).style.fill = "var(--colorSecundary)";
    document.getElementById("pay" + bnt).style.display = "block";
    document.getElementById("hr").style.display = "block";
    
    document.querySelector(label).style.backgroundColor = 'rgba(0, 0, 0, 0.03)';
    document.querySelector(label).style.borderRadius = '10px 10px 0px 0px';
   
}

document.getElementById("inputNumberCard").addEventListener("keypress", function(e){
    inputNumberCardValueLength = document.getElementById("inputNumberCard").value.length;

    if (inputNumberCardValueLength === 4 || inputNumberCardValueLength === 9 || inputNumberCardValueLength === 14) {
        document.getElementById("inputNumberCard").value +=  " "
    }
})

document.getElementById("inputValidadeCardCard").addEventListener("keypress", function(e){
    inputValidadeCardCardValueLength = document.getElementById("inputValidadeCardCard").value.length;

    if (inputValidadeCardCardValueLength === 2 ) {
        document.getElementById("inputValidadeCardCard").value +=  "/"
    }
})