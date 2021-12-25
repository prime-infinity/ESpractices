/**
 * combining map,filter and reduce methods
 */

const employees = [
    {id:1,name:'john',profile:'senior developer',rating1:5,rating2:10},
    {id:2,name:'peter',profile:'junior developer',rating1:5,rating2:5},
    {id:3,name:'alisha',profile:'senior developer',rating1:3,rating2:8},
    {id:4,name:'daniel',profile:'junior developer',rating1:5,rating2:3},
    {id:5,name:'sahil',profile:'dev ops',rating1:0,rating2:10},
]

//calculate the rating only for senior developer

let seniorDevOnlyRating = employees.filter(employe => employe.profile == "senior developer").map(sd => sd.rating1+sd.rating2).reduce((accumulator,value) => accumulator+value,0)
console.log(seniorDevOnlyRating);