const button= document.getElementById("submitButton");

button.addEventListener("click", clickListener);
function clickListener(e){
    e.preventDefault();
    const userInput = document.getElementById("firstName");
    let name = userInput.Value;
    alert(name);
    userInput.value = "";
}