const numbers = [89, 354, 98, 12];
const student = {
    name: 'sakib khan',
    age: 32,
    movies : ['king khan', ' Dhakar Mastan']
}

const about = `my name is ${student.name}` age of ${student.age} has number ${numbers[2]} also like movies ${student.movies[0]};
console.log(about);


// 2. arrow function 
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;

const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x+y+z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum ;

}


//  spread operator 
const newNumbers = numbers;
numbers.push(99);