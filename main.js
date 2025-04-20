var score = 0; 
var winSound = document.getElementById("winSound");

function one(){
    var options = document.getElementsByName("answer1");
    var selectedValue = null;

    for(i = 0; i < options.length; i++){
        if(options[i].checked){
            selectedValue = options[i].value.trim();
            break;
        }
    }
    var correctAnswer = "A.Paris";
    if(selectedValue === correctAnswer){
        alert("Congratulations...! Your answer is correct");
        score = score + 1;
        document.getElementById("score").textContent = "SCORE:" + " " + score;
        winSound.play(); 
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.transform = "translateY(-60px)";
    }
    else if(selectedValue === null){
        alert("Please select a value");
    }
    else{
        alert("Sorry...! Your answer is incorrect");
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.transform = "translateY(-60px)";
     }
}






function two(){
    var options = document.getElementsByName("answer2");
    var selectedValue = null;

    for(i = 0; i < options.length; i++){
        if(options[i].checked){
            selectedValue = options[i].value.trim();
            break;
        }
    }
    var correctAnswer = "A.Cascading Style Sheet";
    if(selectedValue === correctAnswer){
        alert("Congratulations...! Your answer is correct");
        score = score + 1;
        document.getElementById("score").textContent = "SCORE:" + " " + score;
        winSound.play(); 
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.transform = "translateY(-70px)";
    }
    else if(selectedValue === null){
        alert("Please select a value");
    }
    else{
        alert("Sorry...! Your answer is incorrect");

        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.overflowY = "translateY(-70px)";
    }
}






function three(){
    var options = document.getElementsByName("answer3");
    var selectedValue = null;

    for(i = 0; i < options.length; i++){
        if(options[i].checked){
            selectedValue = options[i].value.trim();
            break;
        }
    }
    var correctAnswer = "B.Hyper Text Markup Language";
    if(selectedValue === correctAnswer){
        alert("Congratulations...! Your answer is correct");
        score = score + 1;
        document.getElementById("score").textContent = "SCORE:" + " " + score;
        winSound.play(); 
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.transform = "translateY(-90px)";
    }
    else if(selectedValue === null){
        alert("Please select a value");
    }
    else{
        alert("Sorry...! Your answer is incorrect");

        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.transform = "translateY(-90px)";
    }
}






function four(){
    var options = document.getElementsByName("answer4");
    var selectedValue = null;

    for(i = 0; i < options.length; i++){
        if(options[i].checked){
            selectedValue = options[i].value.trim();
            break;
        }
    }
    var correctAnswer = "C.JavaScript";
    if(selectedValue === correctAnswer){
        alert("Congratulations...! Your answer is correct");
        score = score + 1;
        document.getElementById("score").textContent = "SCORE:" + " " + score;
        winSound.play(); 
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.transform = "translateY(-100px)";
    }
    else if(selectedValue === null){
        alert("Please select a value");
    }
    else{
        alert("Sorry...! Your answer is incorrect");

        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.transform = "translateY(-100px)";
    }
}





function five(){
    var options = document.getElementsByName("answer5");
    var selectedValue = null;

    for(i = 0; i < options.length; i++){
        if(options[i].checked){
            selectedValue = options[i].value.trim();
            break;
        }
    }
    var correctAnswer = "A.Tim Berner Lee";
    if(selectedValue === correctAnswer){
        alert("Congratulations...! Your answer is correct");
        score = score + 1;
        document.getElementById("score").textContent = "SCORE:" + " " + score;
        winSound.play(); 
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.transform = "translateY(-140px)";
    }
    else if(selectedValue === null){
        alert("Please select a value");
    }
    else{
        alert("Sorry...! Your answer is incorrect");

        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.transform = "translateY(-140px)";
    }
}




function six(){
    var options = document.getElementsByName("answer6");
    var selectedValue = null;

    for(i = 0; i < options.length; i++){
        if(options[i].checked){
            selectedValue = options[i].value.trim();
            break;
        }
    }
    var correctAnswer = "D.2";
    if(selectedValue === correctAnswer){
        alert("Congratulations...! Your answer is correct");
        score = score + 1;
        document.getElementById("score").textContent = "SCORE:" + " " + score;
        winSound.play(); 
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.transform = "translateY(-150px)";
    }
    else if(selectedValue === null){
        alert("Please select a value");
    }
    else{
        alert("Sorry...! Your answer is incorrect");

        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.transform = "translateY(-150px)";
    }
}




function seven(){
    var options = document.getElementsByName("answer7");
    var selectedValue = null;

    for(i = 0; i < options.length; i++){
        if(options[i].checked){
            selectedValue = options[i].value.trim();
            break;
        }
    }
    var correctAnswer = "C.Variable";
    if(selectedValue === correctAnswer){
        alert("Congratulations...! Your answer is correct");
        score = score + 1;
        document.getElementById("score").textContent = "SCORE:" + " " + score;
        winSound.play(); 
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.transform = "translateY(-170px)";
    }
    else if(selectedValue === null){
        alert("Please select a value");
    }
    else{
        alert("Sorry...! Your answer is incorrect");

        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.transform = "translateY(-170px)";
    }
}





function eight(){
    var options = document.getElementsByName("answer8");
    var selectedValue = null;

    for(i = 0; i < options.length; i++){
        if(options[i].checked){
            selectedValue = options[i].value.trim();
            break;
        }
    }
    var correctAnswer = "A.WHATWG";
    if(selectedValue === correctAnswer){
        alert("Congratulations...! Your answer is correct");
        score = score + 1;
        document.getElementById("score").textContent = "SCORE:" + " " + score;
        winSound.play(); 
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.transform = "translateY(-180px)";
    }
    else if(selectedValue === null){
        alert("Please select a value");
    }
    else{
        alert("Sorry...! Your answer is incorrect");

        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.transform = "translateY(-180px)";
    }
}




function ninth(){
    var options = document.getElementsByName("answer9");
    var selectedValue = null;

    for(i = 0; i < options.length; i++){
        if(options[i].checked){
            selectedValue = options[i].value.trim();
            break;
        }
    }
    var correctAnswer = "C.Analytical Engine Algorithm";
    if(selectedValue === correctAnswer){
        alert("Congratulations...! Your answer is correct");
        score = score + 1;
        document.getElementById("score").textContent = "SCORE:" + " " + score;
        winSound.play(); 
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.transform = "translateY(-210px)";
    }
    else if(selectedValue === null){
        alert("Please select a value");
    }
    else{
        alert("Sorry...! Your answer is incorrect");

        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.transform = "translateY(-210px)";
    }
}




function tenth(){
    var options = document.getElementsByName("answer10");
    var selectedValue = null;

    for(i = 0; i < options.length; i++){
        if(options[i].checked){
            selectedValue = options[i].value.trim();
            break;
        }
    }
    var correctAnswer = "B.1995";
    if(selectedValue === correctAnswer){
        alert("Congratulations...! Your answer is correct");
        score = score + 1;
        document.getElementById("score").textContent = "SCORE:" + " " + score;
        winSound.play(); 
        document.getElementById("question10").style.display = "none";
        document.getElementById("last").style.transform = "translateY(-200px)";
    }
    else if(selectedValue === null){
        alert("Please select a value");
    }
    else{
        alert("Sorry...! Your answer is incorrect");

        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.transform = "translateY(-200px)";
    }
}

function clearBtn(){
    location.reload();
}