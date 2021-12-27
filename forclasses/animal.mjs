export class Animal {
    constructor(type, legs){
        this.type =  type
        this.legs = legs
    }

    makeNoise(sound = 'Loud noise')//this is an example of default params
    {
        console.log(`${this.type} ${sound}`);
    }

    get metaData(){
        return `Type:${this.type} Legs:${this.legs}`
    }

    static returnSome(){
        return 10
    }

}


//normall, this below will be in its own
//different folder
export class Cat extends Animal{
    /*constructor(type,legs,tail){
        super(type,legs) //the suber inherits from the barent class

    }*/

    makeNoise(sound = 'Meow'){
        console.log(sound);
    } //this is method overriding
}
