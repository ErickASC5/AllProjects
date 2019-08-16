document.getElementById("answer-submit1").addEventListener("click",q1check);
document.getElementById("answer-submit2").addEventListener("click",q1check);
document.getElementById("answer-submit3").addEventListener("click",q1check);

function q1check(){
    let input = document.getElementById("que1").value;
    let answer = "pwd";
    if(input == answer){
        document.getElementById("ans1").innerHTML = "Correct!";
        console.log("yes");
    }
    else{
        console.log("false");
        document.getElementById("ans1").innerHTML = "False";
    }
}

function q2check(){
    let input = document.getElementById("que2").value;
    let answer = "ls";
    if(input == answer){
        document.getElementById("ans2").innerHTML = "Correct!";
        console.log("yes");
    }
    else{
        console.log("false");
        document.getElementById("ans2").innerHTML = "False";
    }
}

function q3check(){
    let input = document.getElementById("que3").value;
    let answer = "cd";
    if(input == answer){
        document.getElementById("ans3").innerHTML = "Correct!";
        console.log("yes");
    }
    else{
        console.log("false");
        document.getElementById("ans3").innerHTML = "False";
    }
}