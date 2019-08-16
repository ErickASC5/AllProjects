// function person(){
//     for(let i = 0; i < 10000; i++){
//     var min=0; 
//     var max=10;  
//     var random =Math.floor(Math.random() * (+max - +min)) + +min; 
//     console.log("Random Number Generated : " + random );  }
// }

// for(let i = 0; i < 10; i++){
// let body = $("body");
// let firstPerson = document.createElement("p");
// firstPerson.innerText = data.results[i].name["first"];
// body.append(firstPerson);
// console.log(data.results[i].name["first"]);
// }

fetch("https://randomuser.me/api?results=25")
    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        for(let i = 0; i < myJson.results.length; i++){
        console.log(myJson.results[i].name["first"]);

        let title = myJson.results[i].name["title"];
        let first = myJson.results[i].name["first"];
        let last = myJson.results[i].name["last"];
        let gender = myJson.results[i].gender;
        let email = myJson.results[i].email;
        let tr = document.createElement("tr");
        tr.innerHTML = 
        "<th>" + title + "</th>"+
        "<th>" + first + "</th>"+
        "<th>" + last + "</th>"+
        "<th>" + gender + "</th>"+
        "<th>" + email + "</th>";

        document.querySelector("table").appendChild(tr);
        }
    });