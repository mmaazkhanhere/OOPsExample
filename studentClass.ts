import { Person } from "./personClass.js"; //importing the Person class from file personClass

export class Student extends Person{
    //student class inherits all the properties of the person class
    
    private name:string; //property of the class

    constructor(){
        //super is used to inherit the constructor of the parent class
        super(); //must be the first statement in the constructor
        this.name=' '; //the property is given default value
    }
    public Name={ //a property which stores an object

       get name() : string { //get accessors allows the user to read data
            return this.name; //property name is returned
        },
       set name(theName : string) { //set accessor allows you to write data to the class
            this.name = theName; //value is assigned to the property name
        }
    }
}