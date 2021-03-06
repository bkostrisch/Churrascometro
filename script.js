// Carne - 400gr por pessoa + de 6horas - 650
// Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml
// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputTempo = document.getElementById("tempo");
let resultado = document.getElementById("resultado");

function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputTempo.value;

    let totalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let totalCerveja = cervejaPP(duracao) * adultos;
    let totalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);


    resultado.innerHTML = `<div class="result">  
                                <img src="img/Carne.png" width="35">
                                <p>${totalCarne / 1000} Kg de Carne</p>
                            </div>`
    resultado.innerHTML += `<div class="result">  
                                <img src="img/Cerveja.png" width="35">
                                <p>${Math.ceil(totalCerveja / 355)} Latas de Cerveja</p>
                            </div>`
    resultado.innerHTML += `<div class="result">  
                                <img src="img/Refri.png" width="35">
                                <p>${Math.ceil(totalBebidas/2000)} Garrafas de Bebidas</p>
                            </div>`


}


function carnePP(duracao) {

    if(duracao >= 6){

        return 650;

    }else {

        return 400;
    }

}

function cervejaPP(duracao) {

    if(duracao >= 6){

        return 2000;

    }else {

        return 1200;
    }

}

function bebidasPP(duracao) {

    if(duracao >= 6){

        return 1500;

    }else {

        return 1000;
    }

}