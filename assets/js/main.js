function meuEscopo(){

      
      
const form = document.querySelector('.form');
const imcMessage = document.querySelector('#imcMessage');

function recebeeventForm (evento){

evento.preventDefault();
let peso  = form.querySelector('.pesoin');
let altura = form.querySelector('.alturain');

let iMC = peso.value / (altura.value*altura.value);

let im = iMC.toFixed(1);

let resultado;

    if(im < 18.5){ 
    resultado = "abaixo do peso" }else 
    if( 18.5 < im && im <= 24.9){
    resultado = "Peso Normal"};
    if(25 < im && im < 29.9){
        resultado = "SobrePeso"
    }else if(30 < im && im < 34.9){
        resultado = "Obesidade Grau1"
    }else if(35<im && im <39.9){
        resultado = "Obsesidade Grau2"
    }else if(im > 40){
        resultado = "Obesidade Grau3"
    }


alert (`Seu IMC:
 ${im}  - indica: ${resultado} `)
    imcMessage.innerHTML = `<p><b>IMC:
 ${im}  - ${resultado} </b></p>`;

    
}


form.addEventListener('submit', recebeeventForm);
}

meuEscopo();
