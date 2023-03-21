function calcular(){
    const altura = Number(document.getElementById('altura').value);
    const peso = Number(document.getElementById('peso').value);
    imc = peso / (altura ** 2);
    imcarrendado = imc.toFixed(2)
    document.querySelector('.resposta1').innerHTML = `Seu imc é de: ${imcarrendado}.`;
    if( imc < 18.5){
        document.querySelector('.resposta2').innerHTML = `Você se encontra a baixo do peso.`;
    }
    else if( imc >= 18.5 && imc < 25){
        document.querySelector('.resposta2').innerHTML = `Você se encontra com o peso ideial.`;
    }
    else if( imc >= 25 && imc <30){
        document.querySelector('.resposta2').innerHTML = `Você se encontra com sobrepeso.`;
    }
    else if(imc >= 30 && imc < 40){
        document.querySelector('.resposta2').innerHTML = `Você se encontra com obesidade.`;
    }
    else{
        document.querySelector('.resposta2').innerHTML = `Você se encontra com obesidade mórbita.`;
    }
    document.querySelector('.resposta3').innerHTML = `Começar a cuidar da saúde é um ato de amor próprio e a academia é um ótimo lugar para dar início a essa jornada de bem-estar. <br> <br> Ao praticar exercícios físicos regularmente, você irá aumentar sua disposição, fortalecer seus músculos, melhorar sua saúde mental e, acima de tudo, cuidar do seu corpo. <br><br> Então, vamos começar? <br><br> A academia está te esperando de braços abertos para te ajudar a se tornar a melhor versão de si mesmo!`;
}