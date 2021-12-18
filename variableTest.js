var thisName = "peter"
console.log("first",thisName);

function getName(){
    var thisName = "john"
    console.log("inside",thisName)
}

if(true){
    var thisName = "naiomi"
    console.log("in true",thisName)
}

getName()
console.log("outside",thisName);