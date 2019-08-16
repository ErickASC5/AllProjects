function evenOrOdd(number){
    if(number % 2 == 0){
        var string = "is even";
        return string;
    }
    else{
        var string = "is not even";
        return string;
    }
}

let array = [12,4,1,35,21,25,45,15,5,23,13,4];

for(let i = 0; i < array.length; i++){
    let result = evenOrOdd(array[i]);
    console.log("The number", array[i], result);
}
//reverse = for(let i = array.length = 1; i > -1; i--)


/*
let user_arg = parseInt(process.argv[2]);
let result = evenOrOdd(user_arg);
console.log(evenOrOdd(result));
*/
