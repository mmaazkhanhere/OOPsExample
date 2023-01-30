#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { Person } from "./personClass.js";
import { Student } from "./studentClass.js";
class Program {
    static async mainFunction() {
        //static members of the class are  accessed using the class name and dot notation
        try 
        //try statement defines the code to run
        {
            let input = await inquirer.prompt({
                name: 'input',
                type: 'number',
                message: 'Input 1 if you are extrovert or 2 if you are introvert'
            }); //user enters a value for personality property of the Person class
            let myPerson = new Person(); //object of Person is created
            myPerson.askQuestion(input.input); //askQuestion function of the Person is called here
            console.log(chalk.blueBright('You are  ' + myPerson.getPersonality())); //personality of the user displayed
            let userName = await inquirer.prompt({
                //user enters the name 
                name: 'userName',
                type: 'input',
                message: 'What is your name: '
            });
            let myStudent = new Student(); //new object of Student class is created
            myStudent.Name = userName.userName; //user input is passed to the proeprty Name of Student class
            //user name and personality is displayed
            console.log(chalk.bgGray(`Your name is ${myStudent.Name} and your personality type is ${myStudent.getPersonality()}`));
            //since askQuestion for Student class is not called, default value will be shown to the user
        }
        catch {
            //the catch statement defines the code that handles the error
            console.log(chalk.bgRed('Please enter an integer value.'));
        }
    }
}
Program.mainFunction(); //mainFunction of the class Program is called using dot operator since it is static
