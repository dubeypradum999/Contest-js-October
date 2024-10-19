/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 }
];

arr.map((student) => {
    console.log(student);
});
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 }
];

arr.forEach((student) => {
    console.log(student);
});
}

function addData() {
  //Write your code here, just console.log
  let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 }
];

const newStudent = { id: 4, name: "susan", age: "21", marks: 90 };

arr.push(newStudent);
console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 }
];

const passedStudents = arr.filter((student) => student.marks >= 40);
console.log(passedStudents);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 }
];

let newStudents = [
    { id: 4, name: "alex", age: "22", marks: 75 },
    { id: 5, name: "emma", age: "21", marks: 95 },
    { id: 6, name: "tom", age: "23", marks: 60 }
];

const combinedArray = arr.concat(newStudents);
console.log(combinedArray);
}