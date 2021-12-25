/**
 * the filter method is simply magical,
 * it creates a new array with all the lements
 * that pass the test implemented by the provided function
 * 
 * it still does not change the orginal array
 */

const employees = [
    {id:1,name:'john',profile:'senior developer'},
    {id:2,name:'peter',profile:'junior developer'},
    {id:3,name:'alisha',profile:'senior developer'},
    {id:4,name:'daniel',profile:'junior developer'},
    {id:5,name:'sahil',profile:'dev ops'},
]

console.log(employees.filter(emp => emp.id >= 2));
console.log(employees);
