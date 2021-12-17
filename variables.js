let firstName = "john"

//let firstName = "joh"
//the above will give an error cus we cannot
//delcare let more than once, but it can however be
//reinitialized
firstName = "john reinitailised"

if(true){
    let firstName = "peter"
    console.log("inside function",firstName)
}

console.log("outside function", firstName)
/**
 * as seen clearly, using the 
 * let keyword of es6 gives more of
 * a more static tybed language becasuse
 * the variables cannot be redcleared,also, with
 * the let keyword, if blocked scobed
 */