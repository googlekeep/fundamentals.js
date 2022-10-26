// 1. how to declare a variable using let and const
const fatherName = 'Arnor';
let season = 'rainy';
season= 'winter';


//  6 basic conditions >, <, !==, ===, <=, =>, 
//  multiple conditions: &&, || 
if (fatherName === 'Arnor' || season === 'rainy'){

}
else if (fatherName === 'Arnor'){

}
else{

}

//  3. array 
// index, 
//  lenght, push,
const numbers = [89, 56, 98, 12];

numbers[0]=56;



// 4. for loop 
for(let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    confirm.log(number);
}

// 5. function 
function multiple(num1, num2){
    const result =num1 * num2;
    return result;
}

const output = multiple(35, 78);


// 6. object 
// 3 ways to access property by name 
const student = {
    name : 'sakhib khan',
    age: 32,
    movies:['king khan' ,'dhakar mastan']
}

console.log(student.age);   // direct by property
console.log(student['age']); // access via property name string 
console.log (student[myVariable])