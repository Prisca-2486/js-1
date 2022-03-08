// let number1 = 3, number2 = 4;

// let userSelection = 'value';

// let result =  null;

// (userSelection == 'a') ? (result = number1 + number2) : result = null;
// (userSelection == 's') ? (result = number1 - number2) : result = null;


// console.log(result);

// console.time('my code');
// console.log('hello world');
// console.log(34+4);
// console.log([2,3,4,5,6]);
// console.log({something: 'this', nothing: 'that'});
// console.table({something: 'this', nothing: 'that'});
// console.warn('This is dangerous');
// console.timeEnd('my code');
// console.error('This is an error');

/* variables in js
var, let, const
*/
// var-global scope, same in whole script

// var name = 'bimala'; 
// var student;
// student = 'js student';
// var marks = 10;
// console.log(name, student, marks);

/*rules for creating variables
1. cannot start with numbers
2. can start with letters, _ , or $
3. are case sensitive */

// var city = 'kathmandu';
// console.log(city);

// const mansName = 'ramlal';
// console.log(mansName);
// // const variable cannot be changed

// // let - block level scope
// {
//     let city = 'lalitpur';
//     city = 'bhaktapur';
//     console.log(city);
// }
// console.log(city); 
// because the console is out of block. so, it checks the value in var variable above, global scope.

// array; collection of numbers, strings, etc.
// const arr1 = [1,2,34,4, 34,78,56];
// arr1 = [10];
// arr1.push(10);
// .push functon adds an element in array bcoz once an arrray is declared in const it cannot be redeclared.
// console.log(arr1);

/* most common programming case types:
camelCase
kebab-case
snake_case
PascalCase*/

// string
// let name = 'bimala';
// console.log('my name is ' + name);
// console.log('data type is ' + (typeof name));

// numbers
// let num = (34+30);
// console.log('my marks is ' + num);
// console.log('data type is ' + (typeof num));

// boolean
// let isgood = true;
// console.log('data type is ' + (typeof isgood));

// null- return value is bogas
// let age = null;
// console.log('data type is ' + (typeof age));

// undefned
// let undef = undefined; 
// console.log('data type is ' + (typeof undef));

// reference data types
// arrays
// let myarr = [1,2,3,3,4,55, 'str',true, false ];
// console.log(myarr);
// console.log('data type is ' + (typeof myarr));

// object literals
// let information = {
//     name : 'sunita' ,
//     age : 25,
//     profession : 'teacher',
//     gender : 'female'
// }
// console.log(information);
// console.log(typeof information);

// function
// function findName() {

// }
// console.log(typeof findName);

// dates
// let date = new Date();
// console.log(typeof date);



console.log('This is my homework' +'.');

// This is twmplate literal.
/*const firstName = 'Bimala';
const secondName = 'Tamang';

console.log(`My name is ${firstName} ${secondName}.`)

const name1 = 'Shyam';
const name2 = 'Basnet';

console.log(`His name is ${name1} ${name2}.`);

const mum1 = 'Sanu Kanxi';
const mum2 ='Tamang';

console.log(`My mum's name is ${mum1} ${mum2}.`);

const bro1 = 'Binod';
const bro2 = 'Tamang';

console.log(`My brother's name is ${bro1} ${bro2}.`);

/* Function:- gouping statements.
function boiler plate:-

function functionName() {

}
*/ 

// function functionName() {
//     const bro1 = 'Binod';
//     const bro2 = 'Tamang';

//     console.log(`My brother's name is ${bro1} ${bro2}.`);
// }
// functionName();

// functionName();---> calling function.

// console.log('This is my workspace.');

// function functionName(){
//     const name1 ='hisname';
//     const name2 ='surname';

//     console.log(`His name is ${name1} ${name2}.`);
// }
// functionName();

// function addition(mun1=2, num3=6){
//     const num1 = x;
//     const num3 = y;
//     result = x*y;
//     return result;
// }
//  console.log(addition());


// function multiplicaiton(number1=2, number2=3){
//     let x = number1;
//     let y = number2;
//     result = x*y;
//     return result;
// }
// const anotherName = multiplicaiton;
// console.log(anotherName());

// // const anotherName = multiplicaiton;----> reference


// function areaOfCircle(){}

// function areaOfCircle(pie, radius , radius1){
//     return pie * radius * radius1;
// }
// let pie = 3.14;
// let radius = 5;
// let radius1 = 5;
   
// console.log(`The area of circle with ${pie}, ${radius}cm and ${radius1}cm is ${areaOfCircle(3.14, 5, 5)}sqcm `);


// function areaOfTriangle(height, base){
//     return height*base/2;
// }    
// let height = 5;
// let base = 10;

// console.log(`The area of triangle with ${height}m and ${base}m is ${areaOfTriangle(5, 10)}sqm `);


// function areaOfSquare(side, side1){
//     return side * side1;
// }
// let side = 20;
// let side1 = 20;

// console.log(`The area of square with ${side}m and ${side1}m is ${areaOfSquare(20, 20)}sqm`);


// function areaOfRectangle(width, length){
//     return width * length;
// }
// let width = 5;
// let length = 10;

// console.log(`The area of rectangle with ${width}m and ${length}m is ${areaOfRectangle(5, 10)}sqm`);


// function areaOfParallelogram(base1, height1){
//     return base1 * height;
// }
// let base1 = 8;
// let height1 = 4;

// console.log(`The area of parallelogram with ${base1}m and ${height1}m is ${areaOfParallelogram(8, 4)}sqm`)


// function areaOfTrapezoid(b1, b2){
//     return 1/2 * (b1+b2);
// }
// let b1 = 2;
// let b2 = 5 ;

// console.log(`The area of trapezoid with ${b1}m and ${b2}m is ${areaOfTrapezoid(2, 5)}sqm`);


// function volumeOfCube(a1, a2 , a3){
//     return a1* a2* a3;
// }
// let a1 = 5;
// let a2 = 5;
// let a3 = 5;

// console.log(`The volume of cube with ${a1}m , ${a2}m and ${a3}m is ${volumeOfCube(5, 5, 5)}mcube`);


// function volumeOfCylinder(r1, r2, h){
//     return 3.14 * r1 * r2 * h;
// }

// let r1 = 5;
// let r2 = 5;
// let h = 10;

// console.log(`The volume of cylinder with ${r1}, , ${r2}m and ${h}m is ${volumeOfCylinder(5, 5, 10)}mcube;`)


// function volumeOfPrism(s1, s2, h1){
//     return s1 * s2 * h1;
// }
// let s1 = 2;
// let s2 = 2;
// let h1 = 5;

// console.log(`The volume of prism with ${s1}m, ${s2}m and ${h1}m is ${volumeOfPrism(5, 5, 10)}mcube`);


// function volumeOfSphere(ra1, ra2, ra3){
//     return (4/3) * 3.14 * ra1 * ra2 * ra3;
// }
// let ra1 = 5;
// let ra2 = 5;
// let ra3 = 5;

// console.log(`The volume of sphere with ${ra1}m, ${ra2}m and ${ra3}m is ${volumeOfSphere(5, 5, 5)}mcube`);


// function volumeOfPyramid(bs, wd, ht){
//     return (1/3) * bs * wd *ht;
// }
// let bs = 6;
// let ht = 10;
// let wd = 6;

// console.log(`The volume of pyramid with ${bs}m, ${wd}m and ${ht}m is ${volumeOfPyramid(6, 6, 10)}mcube`);


// function volumeOfRightCircularCone(rs1, rs2, he){
//     return (1/3) * 3.14 * rs1 * rs2 * he;
// }
// let rs1 = 3;
// let rs2 = 3;
// let he = 10;

// console.log(`The volume of right circular cone with ${rs1}m, ${rs2}m and ${he}m is ${volumeOfRightCircularCone(3, 3, 10)}mcube`);


//  Regular Expressions;-

// 1.
// let regex = /^([a-zA-Z0-9\.]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

// let email = 'ymail@cmail.com';
// let email = '@t5fgf@ciuf.ndvh';
// let email = 'ADFDV@FGVF.DFFR';
// let email = '13ddsf445@hamil.com';



// if(regex.test(email)){
//     console.log(`The email ${email} matches the expression ${regex.source}`);

// }
// else{
//     console.log(`The email ${email} does not match the expression ${regex.source}`);
// }



// 2.
// let rx = /^([a-zA-Z0-9\.*&%]+)@([a-z]+).([a-z]+)(.[a-z]+)?$/;
// let id = 'kamala@hotmail.com.np';
// // let id = 'kAm&l*a@vmail.gov.np';
// // let id = '-kama+la@ymail.23fv';


// if(rx.test(id)){
//     console.log(`The email ${id} matches the expression ${rx.source}`);
// }
// else{
//     console.log(`The email ${id} does not match the expression ${rx.source}`);
// } 



//3.

// let reg = /^([a-zA-Z0-9\_.!]+)@([a-zA-Z]+).([a-z]+)(.[a-z]+)$/;
// let userName = 'greenhill@junkmail.vote';

// if(reg.test(userName)){
//     console.log(`The email ${userName} matches the expression ${reg.source}`);
// }
// else{
//     console.log(`The email ${userName} does not match the expression ${reg.souece}`);
// }

// this keyword:-

const obj1 = {
    name: 'Bimala',
    statement() { return `The nmae of obj1 is ${this.name}`}
}
console.log(obj1.statement());


const obj2 = {
    name: 'Kushal Gaire',
    age: 35,
    profession: 'Driver',
    statement() {return `The name of obj2 is ${this.name}`},
    statement() {return `The age of obj2 is ${this.age}`},
    statement() {return `The profession of obj2 is ${this.profession}`}
}   
// console.log(obj2);
// console.table(obj2);
console.log(obj2.statement());

const obj3 = {
    name: 'Saguni Magar',
    statement() {return `The name of obj3 is ${this.name}`}
}
console.log(obj3.statement());


// call:-
const p1 = {
    name: 'Gagan'
}
 const p2 = {
     name: 'Sajan'
 }

 function namaste() {
     return `namaste my name is ${this.name}`
 }

 console.log(namaste.call(p1));
 console.log(namaste.call(p2));
 
 function update(age, profession, nationality){
     this.age = age;
     this.profession = profession;
     this.nationality = nationality; 
 }
//   apply:-
 
 update.apply(p1, [35, 'Doctor', 'Nepali']);
 update.apply(p2, [45, 'Engineer', 'Indian']);

 console.log(p1);
 console.log(p2);

//  bind;-

const updatep1  = update.bind(p1);
updatep1(32, 'Pilot', 'Pakistani');
console.log(p1);
updatep1('Sagar', 56, 'Security', ' Bhutani');
console.log(p1);

const updatep2 = update.bind(p2);
updatep2(54, 'Minister', 'Bengali');
console.log(p2);