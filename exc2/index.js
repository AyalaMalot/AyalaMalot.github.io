//Ayala Kluft & Shira Pollak
class Question { //question object
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
class Test { //test object
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

function testStart() { //when the button is clicked
    var name = document.getElementById("studentName").value;
    test1.startTest(name);
    buttonStart.style.display = "none";
}

//questions
let question1 = new Question(177, "why don't i know java script?", 1, 40);
let question2 = new Question(196, "why does Sirkis force me to learn java script?", 2, 30);
let question3 = new Question(197, "how am i supposed to do the project?", 3, 30);

//the test 
let test1 = new Test(2649, [question2, question1, question3], 90);
test1.getOrderredQuestions();

//call "testStart" function when 
var buttonStart = document.getElementById("buttonStart");
buttonStart.addEventListener("click", testStart);
console.log(test1);