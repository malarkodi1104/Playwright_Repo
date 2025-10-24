//import { question } from 'readline-sync';
// StudentGrade using Switch case
function studentGrade() {
    switch (studentMark) { //switch (true){} --> can also be written
        case (studentMark >= 91 && studentMark <=100):
            console.log("Student Mark is :" +studentMark);
            console.log("Grade is A1");
            break;
        case (studentMark >= 81 && studentMark <=90):
            console.log("Student Mark is :" +studentMark);
            console.log("Grade is A2");
            break;
        case (studentMark >= 71 && studentMark <=80):
            console.log("Student Mark is :" +studentMark);
            console.log("Grade is B1");
            break;
        case (studentMark >= 61 && studentMark <=70):
            console.log("Student Mark is :" +studentMark);
            console.log("Grade is B2");
            break;
        case (studentMark >= 51 && studentMark <=60):
            console.log("Student Mark is :" +studentMark);
            console.log("Grade is C1");
            break;
        case (studentMark >= 41 && studentMark <=50):
            console.log("Student Mark is :" +studentMark);
            console.log("Grade is C2");
            break;
        case (studentMark >= 31 && studentMark <=40):
            console.log("Student Mark is :" +studentMark);
            console.log("Grade is D");
            break;
        case (studentMark >=0 && studentMark <=30):
            console.log("Student Mark is :" +studentMark);
            console.log("Grade is E");
            break;
        default:
            console.log("Student Mark is :" +studentMark);
            console.log("Grade not applicable");
            break;
    }
}

//const studentMarkInput = question('Enter student mark: ');
//const studentMark = parseInt(studentMarkInput);
//studentGrade(studentMark);
let studentMark = 87;
console.log(`Enter Student Mark : ${studentMark}`);
studentGrade();