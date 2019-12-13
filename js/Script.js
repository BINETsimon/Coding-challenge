function Verify(which){
    var login = document.getElementById('connexion').value;
    var modp = document.getElementById('mdp').value;

    switch(which){
        case 1:
            if ((login.length != 0) || (modp.length != 0)){
                if((modp.length <6) || (modp.length >12)){
                    alert('mdp doit faire entre 6 et 12 caractères');
                }else{
                    alert('bravo');
                }
            }else{
                alert('tt les champs ne sont pas remplis');
            }
            break;

        case 2:
            var mail = document.getElementById('email').value;

            if ((login.length != 0) || (modp.length != 0) || (mail.length != 0)){
                if((modp.length <6) || (modp.length >12)){
                    alert('mdp doit faire entre 6 et 12 caractères');
                }else{
                    alert('bravo');  
                }
            }else{
                alert('tt les champs ne sont pas remplis');
            }
            break;
    }
}