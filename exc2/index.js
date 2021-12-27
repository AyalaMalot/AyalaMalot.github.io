//Ayala Kluft & Shira Pollak
class Question {
    constructor(code, text, questNum, score) {
        this.code = code;
        this.text = text;
        this.questNum = questNum;
        this.answer = null;
        this.score = score;
    }
    isAnswered() {
        if (this.answer)
            return true;
        return false;
    }
    getScore() {
        if (this.isAnswered)
            return this.score;
        return 0;
    }
}
class Test {
    constructor(code, questionList, duration) {
        this.code = code;
        this.questionList = questionList;
        this.studentName = "";
        this.examStart = null;
        this.duration = duration;
    }
    startTest(studentName) {
        this.studentName = studentName;
        this.examStart = Date();
    }
    getOrderredQuestions() {
        let arrQuestions = this.questionList;
        let k = 0;
        for (let i = 1; i < arrQuestions.length; i++) {
            if (arrQuestions[i].questNum < arrQuestions[0].questNum) {
                let temp = arrQuestions[i];
                for (let j = 0; j < i; j++) {
                    arrQuestions[j + 1] = arrQuestions[j];
                }
                arrQuestions[k] = temp;
                k++;
            }
            return arrQuestions;
        }
    }
}
let question1=new Question(177,"why don't i know java script?",1,5);
let question2=new Question(196,"why does Sirkis forcing me to learn java script?",2,10);
let question3=new Question(197,"how am i supposed to do the project?",3,35);

let test1=new Test(2649,[question2,question1,question3],90);
test1.startTest("Ayala Shira");
test1.getOrderredQuestions();
console.log(test1);