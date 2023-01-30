import { Person } from "./personClass.js"; //importing the Person class from file personClass
export class Student extends Person {
    //student class inherits all the properties of the person class
    name; //property of the class
    constructor() {
        //super is used to inherit the constructor of the parent class
        super(); //must be the first statement in the constructor
        this.name = ' '; //the property is given default value
    }
    Name = {
        get name() {
            return this.name; //property name is returned
        },
        set name(theName) {
            this.name = theName; //value is assigned to the property name
        }
    };
}
