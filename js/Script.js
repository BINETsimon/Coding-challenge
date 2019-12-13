function Verify(which){
    var login = document.getElementById('connexion').value;
    var modp = document.getElementById('mdp').value;
    var S1 = document.getElementById('one').innerHTML;
    var S2 = document.getElementById('two').innerHTML;
    var S3 = document.getElementById('three').innerHTML;
                  

    switch(which){
        case 1:
            if ((login.length != 0) || (modp.length != 0)){
                if((modp.length <6) || (modp.length >12)){
                    alert('Votre mot de passe doit faire être compris entre 6 et 12 caractères');
                    S2.style.color = "red";
                }else{
                    alert('bravo tout est parfait !');
                }
            }else{
                alert('Tous les champs ne sont pas remplis, réessayez.');
                S2.style.color = "red";
                S3.style.color = "red";
                S1.style.color = "red";
            }
            break;

        case 2:
            var mail = document.getElementById('email').value;
            
            
            if ((login.length != 0) || (modp.length != 0) || (mail.length != 0)){
                if((modp.length <6) || (modp.length >12)){
                    alert('Votre mot de passe doit faire être compris entre 6 et 12 caractères');
                    S2.style.color = "red";
                }else{
                    alert('Parfait vous êtes inscrits !');  
                }
            }else{
                alert('Tous les champs ne sont pas remplis réessayez');
                S2.style.color = "red";
                S3.style.color = "red";
                S1.style.color = "red";
            }
            break;
    }
}
