function getUser(){

    this.user = "osamede"

    this.changeUser = function(){
        const logThis = () =>{
            console.log(this.user)
        }
        logThis()
    }

}

let user = new getUser()
user.changeUser()

/***
 * here is just to understand the whole
 * issue of the scope of "this"
 */
