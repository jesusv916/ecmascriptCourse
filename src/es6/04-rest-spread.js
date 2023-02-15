//arrays destructuring

let fruits = ['apple', 'banana'];
let [a, b] = fruits;

console.log(a, b);

//object destructuring

let user = {username: 'Jesus', age: '22'};

let {username, age} = user;
console.log(username, age);

//spread operator

let person = {name: 'Angelie', age: '23'}
let country = 'CO';

let data = {...person, country}
console.log(data);

//rest

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);
