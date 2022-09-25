playerone = localStorage.getItem("playerone");
playertwo = localStorage.getItem("playertwo");

playerone_score = 0;
playertwo_score = 0;

document.getElementById("player1_score").innerHTML = playerone_score;
document.getElementById("player2_score").innerHTML = playertwo_score;

document.getElementById("playerone").innerHTML = playerone + " : ";
document.getElementById("playertwo").innerHTML = playertwo + " : ";

document.getElementById("playerQuestion").innerHTML = "Question : " + playerone;
document.getElementById("playerAnswer").innerHTML = "Answer : " + playertwo;

function start(){
    num1 = document.getElementById("word1").value;
    num2  =document.getElementById("word2").value;
    answer = parseInt(num1) * parseInt(num2)

    question_word = "<h4 id='word_display'>Question : " + num1 + " x " + num2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_box'>";
    check_button= "<br><br><button class='btn btn-info' onclick='checkguess()'>Check Answer</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word1").value = "";
    document.getElementById("word2").value = "";
}

q = "player2";

function checkguess(){
    
    if (document.getElementById("input_box").value = answer){
        if(q = "player2"){
            playerone_score = playerone_score +1
            document.getElementById("player1_score").innerHTML = playerone_score;
        } else{
            playertwo_score = playertwo_score +1
            document.getElementById("player2_score").innerHTML = playertwo_score;
        }
    }
    document.getElementById("output").innerHTML = "";
    if(q = "player1"){
        document.getElementById("playerQuestion").innerHTML = "Question : " + playertwo;
        document.getElementById("playerAnswer").innerHTML = "Answer : " + playerone;

        q  ="player2"
    } else {
        document.getElementById("playerQuestion").innerHTML = "Question : " + playerone;
        document.getElementById("playerAnswer").innerHTML = "Answer : " + playertwo;
        q = "player1"
    }

}