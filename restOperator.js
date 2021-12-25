function add(){
    //console.log([...arguments])
}

add(2,3,4,2,1)

const stillAdd = () => {
    //console.log(arguments); //arguments do not work with arrow functions
}
//stillAdd(4,2,3,5)


//with rest 
function addTo(...nums){
    //console.log(nums);
}
addTo(3,2,5,2)

const stillAddTo = (...args) => {
    console.log(args);//for some reason, this is not working
}
stillAdd(3,4,5,2)

/*let noew = [4,5,2,3,4]
noew.reduce()*/

//more than one argum with rest
function calculate(tybe,...values){
    tybe(...values)
}

calculate(sum,10,20,40,40)
function sum(...nums){
    //add to get sum
}