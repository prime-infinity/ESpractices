let productName = "laptop";
let quantity = 2;

let description = 'i have ordered ' + quantity + productName
//console.log(description)

//usgin template literals
let descriptionTwo = `i have ordered ${quantity} ${productName} from "amazon" last week,
so that is why i can use multiline`
//console.log(descriptionTwo)

function doSomething(i = 3){
    return i + 3
}

let goingCrazy = `in this literal ${2 + 2}, also , this is a function call ${doSomething()}`
//console.log(goingCrazy)

let statuss = "pending"

let productStatus = "Status of product is ";
productStatus += (statuss === "delivered") ? 'green':'red'

let newText = `the ${productStatus}`;
console.log(newText)


/**
 * some notes about using normal string vs template literals
 * in normal string mode, you must escape characters when using special
 * symbols such as double quotes, but not temoplate literals
 * 
 * in ns mode, it must be single line, but not with templateLit
 * 
 * it is also worth noting that we can also call functions in tl
 * 
 * conditionals can also be done in tl
 */
