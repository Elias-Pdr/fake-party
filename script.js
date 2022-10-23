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

function mudarCorBtnCompra(bnt){
    var listIconPay = document.querySelectorAll(".iconPay");
    var listContainerPay = document.querySelectorAll(".containerPay");
    
    console.log(listIconPay.length);

    for (let i = 0; i < listIconPay.length; i++) {
        listIconPay[i].style.fill = "black";
        listContainerPay[i].style.display = "none";
    }

    document.getElementById(bnt).style.fill = "var(--colorSecundary)";
    document.getElementById("pay" + bnt).style.display = "block";
}
