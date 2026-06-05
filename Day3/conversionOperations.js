let score=33
let score1="33"
let score2="33abc"
// let score3=33abc //reuturns error since alphanumeric value
let score4=null
let score5=undefined
let score6=true
let score7=false


console.log(typeof(score))//print type of "score using method"
console.log(typeof score) //print type of score using second way


let valueInNumber=Number(score)//Number is converting the actual type of score to type "number" type casting taking place  
console.log(typeof valueInNumber)
console.log(valueInNumber)  //returns NaN if value in score is alphanumeric or undefined meaning "Not a Number"
console.log(typeof score1);
console.log(typeof score2);
console.log(typeof score3);
console.log(typeof score4);
console.log(typeof score5);
let valueInNumber5=Number(score5)
console.log(typeof valueInNumber5)
console.log("value in number 5 is:",valueInNumber5)
console.log(typeof score6);
console.log(typeof score7);
let valueInNumber6=Number(score6)
console.log(valueInNumber6);
let valueInNumber7=Number(score7)

console.log(valueInNumber7);
//Notes
// value "33"=>coverted to 33(type is number)
// value "33abc"=>returns NaN(not a number )
// value true=>1
//value false=>0

let isLoggedIn=1
console.log(typeof isLoggedIn);

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);


let isLoggedIn1="gaurav"
let booleanIsLoggedIn1=Boolean(isLoggedIn1)
console.log(typeof booleanIsLoggedIn1);
console.log(booleanIsLoggedIn1);

//1=>true
//0=>false
//empty quotes("")=>false
//value in quotes(eg."gaurav")=>true


let someNumber=33
let stringSomeNumber=String(someNumber)
console.log(stringSomeNumber);
console.log(typeof stringSomeNumber);

