
function throw_dice(){
    var num1= Math.floor((Math.random())*6)+1;
    var num2 = Math.floor((Math.random())*6)+1;
    console.log("player 1 "+ num1 + "\nplayer 2 "+ num2);
    var img1_src = '<img src="src/dice'+num1+'.png"/>';
    var img2_src = '<img src="src/dice'+num2+'.png"/>';
    document.getElementById("player1").innerHTML = img1_src;
    document.getElementById("player2").innerHTML = img2_src;
    console.log("player 1 "+ img1_src + "\nplayer 2 "+ img2_src);
    if (num1>num2){
        var points = num1-num2;
        document.getElementById("banner").innerHTML = "🏆 Player 1 Wins by "+points+" points";
    }else if(num2 > num1){
        var points = num2-num1
        document.getElementById("banner").innerHTML = "Player 2 Wins by "+points+" points 🏆";
    }else if(num1 === num2){
        document.getElementById("banner").innerHTML = "LOL! Same Pinch 🤏";
    }
}