/**
 * in function borrowing, we basically reuse and call functions from 
 * inside other methods with current methods, observe
 */

/**
 * note that call and apply will execute code then and there
 */

const getFullNameOutside = function(city,profile){
    console.log(`${this.firstName} ${this.lastName} ${city} ${profile}`);
}

const employee = {
    firstName : 'Ninsha',
    lastName:'Singla',
    getFullName:function(city, profile){
        //console.log(`${this.firstName} ${this.lastName} ${city} ${profile}`);
    }
}

const customer = {
    firstName:'Mila',
    lastName:'Kunis'
}

/**
 * the bind method basically jst makes the apply or call method a function to be saved
 */
/**
 * the arguements of the function can then be passed into it
 */
const handler = getFullNameOutside.bind(customer)
handler('benin','creator')


/**
 * we can also apply function or method that was not previously
 * defined to any object
 */
getFullNameOutside.apply(customer,['Pune','Developer'])


//employee.getFullName()
employee.getFullName.call(customer, 'Delhi','Instructor')
employee.getFullName.apply(customer, ['Goa','Artist'])
//the below method "call" is simply magical
//it lets us call a function or method in another object as if it was called by another object

//call takes argument as normal, but apply takes the argument as array

//employee.getFullName()

/*let getEmpDetails = employee.getFullName
getEmpDetails()*/ //this will not work, "this" has been turned to global this

