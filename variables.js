var firstName = "john"

function getName(){
    var firstName = "peter"
    console.log("inside function",firstName)
}

getName()

console.log("outside function", firstName)

if(true){
    var firstName = "peter"
    console.log("inside function",firstName)
}

console.log("outside function", firstName)
//as is very clear from the above examble, the
//var keyword is only scobed in the function, therefore, it 
//will be reinit anytime it is called with something else