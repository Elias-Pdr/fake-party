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

    console.log(listLabel.length);
    
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