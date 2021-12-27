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
