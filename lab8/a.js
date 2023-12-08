// Question 1

let Student = {
    firstName : "Hebron",
    lastNmae : "Melles",
    grades : [],
    insertGrade : function(newGrade){
      this.grades.push(newGrade);
    },
    computeAverageGrade : function(){
       let sum = Student.grades.reduce((x,y) => x + y);
       return sum/this.grades.length;
    }
}
Student.insertGrade(10);
Student.insertGrade(20);
Student.insertGrade(30);
Student.insertGrade(40);
console.log(Student.computeAverageGrade());




// Question 2

const Student2  = function(fName,lName){
    return{
        firstName : fName,
        lastNmae : lName,
        grades : [],
        insertGrade : function(newGrade){
            this.grades.push(newGrade);
        },
        computeAverageGrade: function(){
            let sum = this.grades.reduce((x,y) => x + y);
            return sum/this.grades.length;
        },
        mySort : function(){
            return this.grades.sort((x,y) => x - y);
        }
    };
};
 let student3 = Student2("hebron","melles");
 student3.insertGrade(80);
 student3.insertGrade(60);
 console.log(student3.computeAverageGrade());
 console.log(student3.mySort());


 

