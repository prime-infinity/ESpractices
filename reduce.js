/**
 * the reduce method is kinda esoteric
 * the method executes a reducer function on each element of the array
 * resulting in a single output value
 * 
 * it still does not change the original array
 */

const scores = [100,300,20,12,45,45]

 //trying to do it without reduce

 sum = 0
 for(score of scores){
    sum += score
 }
 //console.log(sum);
//worked above


//using reduce
let totalScore = scores.reduce(function(accumulator, value){
    return accumulator+value   
},0)

let arrowTotalScore = scores.reduce((accumulator,value) => accumulator+value,0)
//the accumulator is the accumulated value
//the value is the value of each element in the array
//console.log(totalScore);

