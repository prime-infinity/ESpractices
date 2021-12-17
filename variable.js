let firstName = "john"

//let firstName = "joh"
//the above will give an error cus we cannot
//delcare let more than once, but it can however be
//reinitialized
firstName = "john reinitailised"

if(true){
    let firstName = "peter"
    //console.log("inside function",firstName)
}

//console.log("outside function", firstName)
/**
 * as seen clearly, using the 
 * let keyword of es6 gives more of
 * a more static tybed language becasuse
 * the variables cannot be redcleared,also, with
 * the let keyword, if blocked scobed
 */


/**
 * this begins the loobs
 */

//var i = 100
//console.log(i)
/*for (i = 0; i <= 10; i++) {

    console.log(i)
    
}*/
//console.log(i)
//notice that the var keyword reinit itself anytime

for (let i = 0; i <= 10; i++) {

    //console.log(i)
    
}
//console.log(i) //here, the let keyword does not redec itself

const forever = 5
//console.log(forever)
//forever = 6 //this will not work



/**
 * this was the excercise at the end of the day
 */

let greet = "hello"
{
    let greet = "Good morning"
    console.log("Greet inside",greet)
}

console.log("Greet outside",greet)