// 🎓 Student Grading System
// 🏫 Create a system that manages student records and calculates their average grade.
//
// 1. Implement a class `Gradebook<T>` to store student records.
// 2. Implement a method `addStudent` that adds a new student with an empty grade list.
// 3. Implement a method `addGrade` that records a new grade for a student.
// 4. Implement a method `getAverageGrade` that returns a student’s average grade.
// 5. Implement a method `getStudentGrades` that returns all recorded grades for a student. Formula to get average: sumOfAllGrades / numberOfSubjects.
// 6. Implement a method `updateSubjectGrade` that updates a subject grade for a student.
class Gradebook {
    students = [];
    addStudent(student) {
        this.students.push(student);
        return `${student.name} added to the gradebook.`;
    }
    addGrade(id, grade) {
        this.students = this.students.map(student => {
            if (student.id === id) {
                student.grades.push(grade);
                return student;
            }
            else {
                return student;
            }
        });
        return `Grade recorded for ${grade.subject}`;
    }
    getAverageGrade(id) {
        let average = 0;
        let total = 0;
        let studentName = "";
        this.students.forEach(student => {
            if (student.id === id) {
                studentName = student.name;
                student.grades.forEach(item => {
                    total += item.grade;
                });
                average = Number((total / student.grades.length).toFixed(2));
            }
        });
        return `${studentName}'s average grade is ${average}.`;
    }
    getStudentGrades(id) {
        const allGrade = [];
        this.students.forEach(student => {
            if (student.id === id) {
                student.grades.forEach(item => {
                    allGrade.push(item);
                });
            }
        });
        return allGrade;
    }
    updateSubjectGrade(id, subject, newGrade) {
        let studentName = "";
        this.students = this.students.map(student => {
            if (student.id === id) {
                studentName = student.name;
                student.grades = student.grades.map(item => {
                    if (item.subject === subject) {
                        return {
                            ...item,
                            grade: newGrade
                        };
                    }
                    else {
                        return item;
                    }
                });
            }
            return student;
        });
        return `${studentName}'s grade of ${subject} updated to ${newGrade}`;
    }
}
// Test cases
const gradebook = new Gradebook();
console.log(gradebook.addStudent({ id: 1, name: "Alice", grades: [] })); // "Alice added to the gradebook."
console.log(gradebook.addStudent({ id: 2, name: "Chloe", grades: [] }));
console.log(gradebook.addGrade(1, { subject: "Math", grade: 90 })); // "Grade recorded for Math."
console.log(gradebook.addGrade(1, { subject: "English", grade: 80 })); // "Grade recorded for English."
console.log(gradebook.addGrade(1, { subject: "Science", grade: 85 })); // "Grade recorded for Science."
console.log(gradebook.addGrade(2, { subject: "Arts", grade: 95 })); // "Grade recorded for Math."
console.log(gradebook.addGrade(2, { subject: "History", grade: 60 })); // "Grade recorded for Science."
console.log(gradebook.getStudentGrades(1)); // Should return all grades for Alice
console.log(gradebook.getAverageGrade(1)); // Should return Alice's average grade
console.log(gradebook.getStudentGrades(2)); // Should return all grades for Alice
console.log(gradebook.getAverageGrade(2)); // Should return Alice's average grade
console.log(gradebook.updateSubjectGrade(1, "English", 95)); // Should update Alice's English grade to 95
