function studentGrade() {
    if (studentMark >=91 && studentMark <=100) {
                 console.log("Student Mark is :" +studentMark);
            console.log("Grade is A1");
    }else if (studentMark >= 81 && studentMark <=90){
            console.log("Student Mark is :" +studentMark);
            console.log("Grade is A2");
    }else if (studentMark >= 71 && studentMark <=80){
            console.log("Student Mark is :" +studentMark);
            console.log("Grade is B1");
    }else if (studentMark >= 61 && studentMark <=70){
            console.log("Student Mark is :" +studentMark);
            console.log("Grade is B2");
    }else if (studentMark >= 51 && studentMark <=60){
            console.log("Student Mark is :" +studentMark);
            console.log("Grade is C1");
    }else if (studentMark >= 41 && studentMark <=50){
            console.log("Student Mark is :" +studentMark);
            console.log("Grade is C2");
    }else if (studentMark >= 31 && studentMark <=40){
            console.log("Student Mark is :" +studentMark);
            console.log("Grade is D");
     }else if (studentMark >=0 && studentMark <=30){
            console.log("Student Mark is :" +studentMark);
            console.log("Grade is E");
     }else {
        console.log("Student Mark is :" +studentMark);
        console.log("Grade not applicable");
    }
}
let studentMark = -262;
studentGrade();