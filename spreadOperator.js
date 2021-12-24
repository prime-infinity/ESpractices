const users =  ["user1","user2"]
//console.log(users)
for (let i = 0; i < users.length; i++) {
    const element = users[i];
    //console.log(element);
}

//console.log(...users);


//spread operator with arrays
const team1 = ['user1','user2'];
const team2 = ['user3'];

const newTeam = [...team1,...team2]
//console.log(newTeam);


//copying arrays
const productList1 = ['phone','adapter']
const newProductList = [...productList1]
//console.log(newProductList);



//spread operator with objects
const emp = {
    name:'john',
    job:'developer'
};

const personalDetails = {
    age:20
}

const clonedEmployeed = {...emp}
//console.log(clonedEmployeed);

const employedDetails = {...emp,...personalDetails}
//console.log(employedDetails);

//suprising enough, this was it with spread operator and objects




//spread operator with functions
const scoreList = [100,40,200,43]
//console.log(Math.min(...scoreList));

const addTonum = x => x + 3
for (let i = 0; i < scoreList.length; i++) {
    const e = scoreList[i];
    //console.log(addTonum(e));
}




//immutability with spread operator




/**
 * 
 */