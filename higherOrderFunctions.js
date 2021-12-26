/**
 * functions are firstclass citizens in js,
 * which means that they can be treated the same way as 
 * variables
 */

function x(fn){
    fn()
}
function y(){
    //console.log("hello from y");
}

x(y) //higher order function, y is callback function


//calculate square of number
data = [10,20,30,5]
const calculate_square_arrow = function(a){
    //console.log(a*a);
}
for(da of data){
    calculate_square_arrow(da)
}

squared = data.map(da => da*da)
//console.log(squared); //done here

/**
 * so alot of shit code was
 * written in the video and the lady was like "now we'll write higher order functions to make code better"
 * so yeah,
 */

function cal_square(x){
    return x*x;
} 

function cal_add(x){
    return x+1
}

const calculate_square = function(d,calculate){
    const output = []
    for(var i=0; i<d.length;i++){
        output.push(calculate(d[i]))
    }
    return output
}

Array.prototype.calculate_square_prototype = function(calculate){
    const output = []
    for(var i=0; i<this.length;i++){
        output.push(calculate(this[i]))
    }
    return output
}
console.log(data.calculate_square_prototype(cal_square));
//just learning about array.prototype



console.log(calculate_square(data,cal_square));
console.log(calculate_square(data,cal_add));
console.log(data.map(cal_square));
//so apperantly, this function is taking another function as 
//an arguement that will eventuatlly do somethgin in the main function later, big deal

/**
 * as a side note, we see the beauty of functions as we are eaily able to 
 * reuse them
 */