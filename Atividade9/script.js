
function CalcularImc(){
    var imc;
    var altura;
    var peso;
    peso = prompt("Digite seu peso: " );
    altura = prompt("Digite sua altura: ");
    if (isNaN(peso) || isNaN(altura)) {
        alert("Por favor, insira números válidos.");
        CalcularImc();
        return;
    }
    imc = Math.round(peso/Math.pow(altura, 2));
    if (imc<18.5){
        return alert (`O seu imc é ${imc} - Magreza`);
    } 
    else if (imc>=18.5 && imc<=24.9){
        return alert(`O seu imc é ${imc} - Normal`)
    }
    else if(imc>=25.0 && imc<=29.9){
        return alert(`O seu imc é ${imc} - Sobrepeso`)
    }
    else if(imc>=30.0 && imc<=39.9){
        return alert(`O seu imc é ${imc} - Obesidade`)
    }
    else if (imc>=40.0){
        return alert(`O seu imc é ${imc} - Obesidade Grave`)
    }
}