const menos = document.getElementById("menos");
const mais = document.getElementById("mais");
const cups = document.getElementById("cups");
const cup = document.getElementById("cup");
const volu = document.getElementById("volu");
let result = 0;
let litros = 0;
mais.onclick = function(){
    result++;
    cups.textContent = result;
    cup.textContent = result;
    litros += 200;
    volu.textContent = litros + "ml";
    if(litros >= 1000){
        volu.textContent = litros/1000 + "L"
    }
}
menos.onclick = function(){
     if(result <= 0){
        return;
    }
    result--;
    cups.textContent = result;
    cup.textContent = result;
   
    if(litros <= 0){
        return;
    }
    litros -= 200;
    volu.textContent = litros + "ml";
    if(litros >= 1000){
        volu.textContent = litros/1000 + "L"
    }
}
function calcular(){
    const valor = document.getElementById("peso").value;
    const numero = parseFloat(valor);
    const exe = (numero * 35) / 1000;
    document.getElementById("resultado").innerHTML = exe + " Litros";
}

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
        const peso = document.getElementById("peso").value;
        let pesoEmGramas = (peso * 35) / 1000;
        document.getElementById("resultado").innerHTML = pesoEmGramas + " Litros";
        peso.click();
    }
});

/*

function calcular() {

    let peso = document.getElementById("peso").value;
    let pesoEmGramas = (peso * 35) / 1000;
    document.getElementById("resultado").innerHTML = pesoEmGramas + " Litros";
} 
 */
