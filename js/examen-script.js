function exo1(){
    var number = document.getElementById('nombreExo1').value;
    number /= 2;
    document.getElementById('resultExo1').innerHTML = "résultat : " + number;
}


var incremente = 0;
var nombre1Exo2 = 0;
var nombre2Exo2 = 0;
var register = '';

function exo2(valeur){
    var result = document.getElementById('resultExo2');

    if (incremente ==  0){
        result.innerHTML = "";
    }
    if ((valeur>=0) && (valeur<=9)){
        if (register != ''){
            nombre1Exo2 = nombre1Exo2 * 10 + valeur;
        }else{
            nombre2Exo2 = nombre2Exo2 * 10 + valeur;
        }
        result.innerHTML += valeur;
        incremente++;
    }
    switch(valeur){
        case 'div':
            register = valeur;
            result.innerHTML += " / ";
            break;
        case 'plus':
            register = valeur;
            result.innerHTML += " + ";
            break;
        case 'resultat':
            result.innerHTML += " = ";
            if (register == "div"){
                result.innerHTML += nombre1Exo2/nombre2Exo2;
            }else if (register == 'plus'){
                result.innerHTML += nombre1Exo2+nombre2Exo2;
            }
            break;
        case'reset':
            result.innerHTML = "Veuillez entrer un entier...";
            incremente = 0;
            nombre1Exo2 = 0;
            nombre2Exo2 = 0;
            break;
    }
}