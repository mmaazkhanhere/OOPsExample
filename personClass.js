export class Person {
    personality; //property of the class
    constructor() {
        this.personality = 'Mystery'; //property assigned default value
    }
    askQuestion(answer) {
        //a public function which takes number as parameter and returns nothing
        if (answer == 1) { //if user enters 1, user is extrovert
            this.personality = 'You are extrovert';
        }
        else if (answer == 2) { //if user enters 2, user is introvert
            this.personality = 'You are introvert';
        }
        else { //if user enters anything other than 1 and 2, user is still a mystery to solve
            this.personality = 'You are still a mystery';
        }
    }
    getPersonality() {
        //a public function which returns the property personality
        return this.personality;
    }
}
