let incomes = [200,300,400]
let total = 0

for (let i = 0; i < incomes.length; i++) {
    const e = incomes[i];
    //total = total + e
}
//console.log(total);

for (let income of incomes){
    //console.log(income);
    total = total + income
}
//console.log(total);

for (let i = 0; i < incomes.length; i++) {
    let e = incomes[i];
    e += 50
    //console.log(e);
}
console.log(incomes);//this does not change the original array

/**
 * the for and for off loops are not really used to 
 * change the value of the array,
 * for that, the map method is better
 */