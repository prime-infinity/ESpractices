/**
 * optional chaining is a safe way to access nested object properties,
 * even if an intermediate property dosent exist.
 * 
 * the optional chaining stops the evaluation if the value before is is undefined
 * or null and returns undefined
 */

const user = {
    name:'ninsha',
    /*address:{
        city:'delhi'
    }*/
}

//console.log(user.address?.city);
//the syntax above is optional chaining
//you should understand it, it basically checks if 
//the value before it is there or not, and depending, either stops or continue the evaluation

const customerDetail = {
    userId:'12345',
    account:{
        accountToken:'ABC1234',
        holder:{
            /*profile:{
                lastname:'Some',
                firstName:'Khurn',
                birthDay:'1990-10-10'
            }*/
        },
        contacts:{

        }
    }
}
//console.log(customerDetail.account?.holder.profile?.birthday);
/**
 * it stops that pesky "cannot ready property of undefined or null"
 */

//Optional operator can also be used with functions inside objects

customerDetail.getName?.()