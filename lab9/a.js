/* properties:
studentId: a unique student id. it is number type.
answers: holds an array that records the student's answers for the questions.
method:
addAnswer(question) - add student's question(id, answer) to answers array.*/




class Student{
    studentId;
    answers = [];
    constructor(id){
        this.studentId = id;
    }
    addAnswer = function(question){
         answers.push(question);
    }
}

class Question{
    questionId;
    answers ;
    
    constructor(id,answer){
        this.questionId = id;
        this.answers = answer;
        
    }
    checkAnswer = function(studanswer){
    return answers === studanswer;
    
    }
}

class Quiz extends Question{
    students = [];
    questions = new Map();
    constructor(questionId, stud){
        this.students.push(stud);
        this.questions.set(Question,this.students);

    }
    //scoreStudentBySid(sid), computes the quiz score for this student
 //getAverageScore(), computes the average score over all students
    //

    scoreStudentBySid = function(sid){
        let num = 0;
         for(let i = 0; i < this.students.length; i++){
            if(sid === students[i].studentId){
                for(let y = 0; y < this.students[i].length; y++){
               if(questions.get(questionId).checkAnswer === true){
                num++;
               }
                }
            }
         }
         return num;
    }

}
const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new
Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10);