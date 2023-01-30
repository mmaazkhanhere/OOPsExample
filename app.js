#! /usr/bin/env node
import inquirer from "inquirer";
import { Person } from "./personClass.js";
import { Student } from "./studentClass.js";
class Program {
    static async mainFunction() {
        try {
            let name;
            let input = await inquirer.prompt({
                name: 'input',
                type: 'number',
                message: 'Input 1 if you are extrovert or 2 if you are introvert'
            });
            console.log(input.input);
            let myPerson = new Person();
            myPerson.askQuestion(input.input);
            console.log('You are  ' + myPerson.getPersonality());
            let userName = await inquirer.prompt({
                name: 'userName',
                type: 'input',
                message: 'What is your name: '
            });
            console.log(`${userName.userName}`);
            let myStudent = new Student();
            myStudent.Name = userName.userName;
            console.log(`Your name is: ${myStudent.Name} and your personality type is: ${myStudent.getPersonality()}`);
        }
        catch {
            console.log('Please enter an integer value.');
        }
    }
}
Program.mainFunction();
