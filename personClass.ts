export class Person{
    
    private personality:string;
    constructor(){
        this.personality='Mystery';
    }

    public askQuestion(answer:number):void {
        if(answer==1){
            this.personality='You are extrovert';
        }
        else if(answer==2){
            this.personality='You are introvert';
        }
        else{
            this.personality='You are still a mystery'
        }
    }

    public getPersonality(){
        return this.personality;
    }
}