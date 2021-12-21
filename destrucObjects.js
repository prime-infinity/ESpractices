const personalInformation = {
    firstName : 'Dylan',
    lastName :'Isreal',
    city : 'Austin',
    state :'Texas',
    zipCode : 323242,
}; 

const {firstName:fn, lastName:ln} = personalInformation

console.log(`${fn} ${ln}`)

const nonPersonalInfo = {
    phoneNumbre :423232343,
    address: "someaddress",
    DOB:4334,
}

const {phoneNumbre:pn,address:ad,DOB:db} = nonPersonalInfo

console.log(pn,ad,db)