//primitive datatypes(call by value)

//7types: String,Number,Boolean,null,undefined,Symbol,BigInt

//JS is dynamically typed language means const score=100 etc means the constant score can have any value like boolean,number, string etc
const score=100
const isLoggedIn=false
const scoreValue=1000
const outsideTemp=null

let userEmail;

const id=Symbol('122')//creates unique value 
const anotherId=Symbol('122')//even though you give same value it will create unique value

console.log(id===anotherId);//will giev false
const bigNumber=6099889090393737380n
console.log(typeof bigNumber);

//Reference(non primitive)
//Array,Objects,Functions
const heros=["Ironman","Captain America,Hulk"];//array
let myObj={
    name:"gaurav",
    age:20,
    gender:"male",
}//object 

// function(){} syntax for function
const myFunction=function(){
    console.log("Gaurav")
}
console.log(typeof myFunction);
