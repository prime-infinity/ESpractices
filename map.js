/**
 * the map() method creates a new array populated with the
 * results of calling a provided function on eveery element in the array
 * does not change the original array
 * 
 * map basically transforms each element of the array
 */

const users = ['sam','peter','daniel']
let modifiedUsers = users.map(user => user.toUpperCase())
let anotherUser = users.map(trasform)
function trasform(values){
    return values.toUpperCase()
}

/*console.log(users);
console.log(modifiedUsers);
console.log(anotherUser);*/

//trying to use map to add elements
const numbers = [1,2,3,4,5]
let sum = 0
let newNum = numbers.map(number => sum+=number)
/*console.log(sum);
console.log(newNum);*/



const users2 = [
    {id:1,name:'Akisha'},
    {id:2,name:'Kunal'},
    {id:3,name:'Raj'},
    {id:4,name:'Veer'},
]

//console.log(users2.map(user => user.name.toUpperCase()));

//trying useing looop
let newUserArray = []
for(userr of users2){
    newUserArray.push(userr.name);
}
//console.log(newUserArray);

//as can see, map is far better