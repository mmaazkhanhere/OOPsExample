export class Person {
    personality;
    constructor() {
        this.personality = 'Mystery';
    }
    askQuestion(answer) {
        if (answer == 1) {
            this.personality = 'You are extrovert';
        }
        else if (answer == 2) {
            this.personality = 'You are introvert';
        }
        else {
            this.personality = 'You are still a mystery';
        }
    }
    getPersonality() {
        return this.personality;
    }
}
