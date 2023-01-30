#! /usr/bin/env node

import inquirer from "inquirer";
import { Person } from "./personClass.js";

class Program{
    static async mainFunction(){
       try 
        {
            let input= await inquirer.prompt({
            name:'input',
            type:'number',
            message:'Input 1 if you are extrovert or 2 if you are introvert'
        })
        console.log(input.input);
        let myPerson= new Person();
        myPerson.askQuestion(input.input);
        console.log('You are  '+myPerson.getPersonality())
    }
    catch{
        console.log('Please enter an integer value.')
    }
}
}
Program.mainFunction();