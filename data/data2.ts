
 let num1: number = 3
let num2: number = 6


interface Student {
    name: string;
    age: number;
    grade: number;
}

const students: Student[] = [
{
     name: "Alice",
     age: 23,
     grade: 12,
},
{
    name: "Bob",
    age: 17,
    grade: 11
},
{
    name: "Ayaz",
    age: 16,
    grade: 10
},
// You can add more students object here
];

export {num1, num2, students}