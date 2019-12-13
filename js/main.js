var myVar = setInterval(SwitchWord, 3000);
var switchcase = 0;

function SwitchWord(){
    console.log('yolo');
    var text = [
        "épique",
        "trop cool",
        "fun",
        "intense"
    ];
    document.getElementById('switch-word').innerHTML = text[switchcase];
    switchcase++;
    if(switchcase == 4){
        switchcase = 0;
    }
}
