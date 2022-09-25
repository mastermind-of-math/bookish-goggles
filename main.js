function playGame(){
    playerone = document.getElementById("inputname_1").value;
    playertwo = document.getElementById("inputname_2").value;
    localStorage.setItem("playerone", playerone);
    localStorage.setItem("playertwo", playertwo);

    window.location = "game.html";
}