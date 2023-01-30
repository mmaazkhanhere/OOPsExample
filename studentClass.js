import { Person } from "./personClass.js";
export class Student extends Person {
    name;
    constructor() {
        super(); //must be the first statement in the constructor
        this.name = ' ';
    }
    Name = {
        get name() {
            return this.name;
        },
        set name(theName) {
            this.name = theName;
        }
    };
}
