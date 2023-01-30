import { Person } from "./personClass.js";

export class Student extends Person{

    private name:string;

    constructor(){
        super(); //must be the first statement in the constructor
        this.name=' ';
    }
    public Name={

       get name() : string {
            return this.name;
        },
       set name(theName : string) {
            this.name = theName;
        }
    }
}