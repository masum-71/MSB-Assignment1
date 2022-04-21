

//*********************  ASSIGNMENT No: 1  ********************//
//Task No: 1
//Even Or Odd
let evenOdd = 27;

if(evenOdd % 2 === 0){
  console.log(`this is an Even number`)
}else{
  console.log(`this is an Odd number`)
};
//*******************************************************

//Task No: 2
//Positive Or Nagetive
let positiveNagetive = 5;

let isPositiveOrNagetive = (positiveNagetive > 0) ?
 `${positiveNagetive} is a Positive number` : 
 `${positiveNagetive} is a Nagetive number`;
 console.log(isPositiveOrNagetive);
 //************************************************* *

//Task No: 3
//Bigger Number
let num1 = 210;
let num2 = 20;

if(num1 > num2) {
    console.log(`${num1}`)
}else{
    console.log(`${num2}`)
};

//**************************************************

//Task No: 4
// Smallest Number

let num3 = 1;
let num4 = 6;
let num5 = 3;

if(num3 < num4 && num3 < num5) {
  console.log(`${num3} is smallest`)
}else if(num4 < num3 && num4 < num5){
  console.log(`${num4} is smallest`)
}else{
  console.log(`${num5} is smallest`)
};

//**************************************************

//Task No: 5
// Divisible by 5 & 11


let num6 = 15;

if(num6 % 5 === 0 && num6 % 11 === 0) {
  console.log(`${num6} is divisible by 5 and 11`)
}else if (num6 % 5 === 0 || num6 % 11 === 0){
  console.log(`${num6} is divisible by 5 or 11`)
};

//**************************************************

//Task No: 6
// Between 100-200

let num7 = 158;

if(num7 > 100 && num7 < 200 && num7 % 2 === 0) {
  console.log(`Number is even and it is in between 100 & 200`)
}else{
  console.log(`condition not fulfilled`)
};

//**************************************************

//Task No: 7
// Print day name

let day = 4;

switch (day) {
  case 1:
    console.log(`Saturday`);
    break;
  case 2:
    console.log(`Sunday`);
    break;
  case 3:
    console.log(`Monday`);
    break;
  case 4:
    console.log(`Tuesday`);
    break;
  case 5:
    console.log(`Wednesday`);
    break;
  case 6:
    console.log(`Thursday`);
    break;
  case 7:
    console.log(`Friday`);
    break;
  default:
    console.log(`this id not a valid day`)
};

//**************************************************

//Task No: 8
// Grading System

let mark = 60;

switch (true){
  case mark >= 80 && mark <= 100:
    console.log(`A+`);
  break;
  case mark >= 70 && mark <= 79:
    console.log(`A`);
  break;
  case mark >= 60 && mark <= 69:
    console.log(`A-`);
  break;
  case mark >= 50 && mark <= 59:
    console.log(`B`);
  break;
  case mark >= 40 && mark <= 49:
    console.log(`C`);
  break;
  case mark >= 33 && mark <= 39:
    console.log(`D`);
  break;
  case mark >= 0 && mark <= 32:
    console.log(`F`);
  break;
  default:
    console.log(`This mark is not valid`);
};
//**************************************************

//Task No: 9
// Fizz Buzz

let fizzBuzzNum = 30;

let fizzbuzz = (fizzBuzzNum % 3 === 0 && fizzBuzzNum % 5 ===0) ? 
`Fizz Buzz` : (fizzBuzzNum % 3 === 0) ? `Fizz`:
 (fizzBuzzNum % 5 === 0) ? `Buzz` : `Nothing`;
 console.log(fizzbuzz);

 //**************************************************

 //Task No: 10
// Vowel Conconant

let char = 'j';

let finalChar = char.toUpperCase();

if(finalChar === 'A' ||
 finalChar === 'E' || finalChar === 'I'||
 finalChar === 'O' || finalChar === 'U' ) {
   console.log(`This '${finalChar}' is a Vowel`)
 }else{
  console.log(`This '${finalChar}' is a Consonant`)
 };

 //**************************************************
//Task No: 11
// UpperCase LowerCase
let charcter = 'k';

if(charcter !== charcter.toUpperCase()) {
  console.log(`This '${charcter}' is a Lower case Charcter`)
}else if(charcter !== charcter.toLowerCase()){
  console.log(`This '${charcter}' is a Upper case Charcter`)
};

//**************************************************
//Task No: 12
// Alphabet or Number
let alphaNum = 'u';

if(isNaN(alphaNum) === true) {
  console.log(`this '${alphaNum}' is a Alphabet`)
}else{
  console.log(`this '${alphaNum}' is a Number`)
};
//**************************************************
//Task No: 13
// Digits in number
let numberCount = 65896;
let numberString = numberCount.toString().length;

if(numberCount < 100000) {
  console.log(numberString)
};
//**************************************************
//Task No: 14
// Leap Year

let year = 1896;
if(year % 4 === 0 && year % 100 !== 0) {
  console.log(`${year} is a Leap Year`)
}else if(year % 400 === 0){
  console.log(`${year} is a Leap Year`)
}else{
  console.log(`${year} is not a Leap Year`)
};
//                  **************                 //
let notLeap = 1900;
if(notLeap % 4 === 0 && notLeap % 100 !== 0) {
  console.log(`${notLeap} is a Leap Year`)
}else if(year % 400 === 0){
  console.log(`${notLeap} is a Leap Year`)
}else{
  console.log(`${notLeap} is not a Leap Year`)
};
//**************************************************
//Task No: 15
// Distance Fare

let distance = 180;

let fare = (distance > 0 && distance <= 100) ? 
`Fare is 120` : (distance > 100 && distance <= 200)?
`Fare is 200` : (distance > 200 && distance <= 300)?
`Fare is 300` : `Not Interested`;

console.log(fare);
//**************************************************
//Task No: 15
// Trangle

let a = 10;
let b = 12;
let c = 15;

if((a + b) > c || (a + c) > b || (b + c) > a){
    console.log(`This is a valid trangle`);
}else{
  console.log(`This is not a valid trangle`);
};
//**************************************************   
//Task No: 16
//Big Assignment

let targetYear = 2008;
let targetMonth = 2;

function leapYear(){
  if(targetYear % 400 === 0){
    return true;
  }else if(targetYear % 4 === 0 && targetYear % 100 !== 0){
    return true
  }else{
    return false;
  }   
};

switch (true){
  case targetMonth === 1:
    console.log(`this month contains 31 days`);
    break;
  case targetMonth === 2 && leapYear() === true:
    console.log(`this month contains 29 days`);
    break;
  case targetMonth === 2:
    console.log(`this month contains 28 days`);
    break;
  case targetMonth === 3:
    console.log(`this month contains 31 days`);
    break;
  case targetMonth === 4:
    console.log(`this month contains 30 days`);
    break;
  case targetMonth === 5:
    console.log(`this month contains 31 days`);
    break;
  case targetMonth === 6:
    console.log(`this month contains 30 days`);
    break;
  case targetMonth === 7:
    console.log(`this month contains 31 days`);
    break;
  case targetMonth === 8:
    console.log(`this month contains 31 days`);
    break;
  case targetMonth === 9:
    console.log(`this month contains 30 days`);
    break;
  case targetMonth === 10:
    console.log(`this month contains 31 days`);
    break;
  case targetMonth === 11:
    console.log(`this month contains 30 days`);
    break;
  case targetMonth === 12:
    console.log(`this month contains 31 days`);
    break;
    default:
      console.log(`this is not a valid month`)
}
