var sum = (a,b) => a+b
//console.log(sum(2,4))


//normal es5 function
function add(x,y){
    return x + y
}
//console.log(add(2,4))

//arrow function of es6
const summ = (x,y) => x+y
console.log(summ(10,2))

//arrow function with single arguemnts is simply devine
const arF = x => x+3
console.log(arF(43))



/**
 * arrow functions come with default return statement, but only if
 * the function is one line long, if more than one line, parthen must be used.
 * 
 * 
 */