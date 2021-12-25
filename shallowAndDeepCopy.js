/**
 * shallow or reference or mutable copy for non-primiitives
 * 
 * deep or value or immutable copy for primitives
 */


let originalValue = 10
let copiedValue = originalValue //this will perform a deep copy by default
/*
console.log(originalValue);
console.log(copiedValue);*/

copiedValue = 20

/*
console.log(originalValue);
console.log(copiedValue);*/


let originalValueObject = {
    names:'John',
    age:20
}

let copiedValueObject = originalValueObject //this will perfor a shallow or reference copy by def
/*console.log(originalValueObject);
console.log(copiedValueObject);*/

copiedValueObject.name = "peter" //this will also mutate the original object
/*console.log(originalValueObject);
console.log(copiedValueObject);*/


//JSON.stringify()
let originalValueObjectj = {
    names:'John',
    age:20
}

let copiedValueObjectj = JSON.parse(JSON.stringify(originalValueObjectj))  
copiedValueObjectj.name = "peter"
/*console.log(originalValueObjectj);
console.log(copiedValueObjectj);*/
//the above will do a deep copy of the object,
//but it does not work when there is function in object


//let copiedValue = Object.assign({},originalValue)
//also recall the immeditate above to do deep copy



//let copiedValue = {...originalValueObjectj}
//the above does a default deep copy, #spread operator

copiedValueObject = {
    ...copiedValueObject,
    name:'Alisha',
    address:{
        ...copiedValueObject.address,
        city:'Goa'
    }
}

//the above will truly work when mutating values copied with spread operator
//without mutating original object