function imc(){ 

let nome = document.getElementById('nome').Value

let altura = document.getElementById('altura').Value

let peso = document.getElementById('peso').Value

let resultado = document.getElementById('result')

if(nome !== '' && altura !== '' && peso !== '') {
  
 resultado = (peso / (altura * altura)).toFixed(1)
    if (resultado < 18.5)
    if (resposta > 18.6 && resposta < 24.9)
    if (resposta > 25.0 && resposta < 29.9)
    if (resposta > 30.0 && resposta < 34.9)
    if (resposta > 35.0 && resposta < 39.9)
    if (resultado > 40.0)

    if (resultado < 18.5){
        ValorIMC = "Abaixo do peso" 
    }  

    if (resposta > 18.6 && resposta < 24.9){
        ValorIMC = "Peso ideal(Parabéns)"
    } 
    
    if (resposta > 25.0 && resposta < 29.9){
        ValorIMC = "Levemente acima do peso"
    }

    if (resposta > 30.0 && resposta < 34.4){
        ValorIMC = "Obesidade grau 1"
    }

    if (resposta > 35.5 && resposta < 39.9){
        ValorIMC = "Obesidade grau 2 (severa)"
    }

    if (resultado > 40){
        ValorIMC = "Obesidade 3 (Mórbida)"
    } else{
        
    }


}  else
resultado.innerHTML = "preencha todos os campos"

}