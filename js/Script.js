function Verify(which){
    var login = document.getElementById('connexion').value;
    var modp = document.getElementById('mdp').value;
    var S1 = document.getElementById('conneX');
    var S2 = document.getElementById('motdp');
    var good = document.getElementById('good');

    switch(which){
        case 1:
            if ((login.length != 0) || (modp.length != 0)){
                if((modp.length <6) || (modp.length >12)){
                    S2.innerHTML = "Votre mot de passe n'est pas correct. Il doit être composé de 6 à 12 caractères."
                    S2.style.color = "red";
                }else{
                    S2.style.color = "transparent";
                    S1.style.color = "transparent";
                    good.style.display = "flex";
                    console.log('cc');
                }
            }else{
                S2.innerHTML = "Le champ mdp est vide";
                S2.style.color = "red";
                S1.style.color = "red";
            }
            break;

        case 2:
            var mail = document.getElementById('email').value;
            var S3 = document.getElementById('emailtxt');
            
            if ((login.length != 0) || (modp.length != 0) || (mail.length != 0)){
                if((modp.length <6) || (modp.length >12)){
                    S2.innerHTML = "Votre mot de passe n'est pas correct. Il doit être composé de 6 à 12 caractères."
                    S2.style.color = "red";
                }else{
                    S2.style.color = "transparent";
                    S3.style.color = "transparent";
                    S1.style.color = "transparent";
                    good.style.display = "flex";
                }
            }else{
                S2.innerHTML = "Le champ mdp est vide";
                S2.style.color = "red";
                S3.style.color = "red";
                S1.style.color = "red";
            }
            break;
    }
}


