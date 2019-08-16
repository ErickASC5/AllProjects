fetch("https://randomuser.me/api?results=10")
    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        console.log(myJson);
        for(let i = 0; i < 10; i++){
        let email = myJson.results[i].email;
        let p = document.createElement("h1");
        p.innerText = email;
        document.body.appendChild(p);
        }
    });