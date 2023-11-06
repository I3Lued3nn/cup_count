const menos = document.getElementById("menos");
const mais = document.getElementById("mais");
const cups = document.getElementById("cups");
const volu = document.getElementById("volu");

let result = 0;
let litros = 0;

mais.onclick = function(){
    result++;
    cups.textContent = result;

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
    
   if(litros <= 0){
        litros = 200 ;
    }
    
    litros -= 200;
    volu.textContent = litros + "ml";
    if(litros >= 1000){
        volu.textContent = litros/1000 + "L"
    }

    
}
