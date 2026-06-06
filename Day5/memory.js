//2 types Stack(stores all primitive datatypes), Heap(stores all non primitiv datatypes)
// Stack gives copy of values whereas heap gives reference of values 
// changes in heap are visible in values of original values 
// changes in stack are not visible in values of original values 

let myName="Gaurav"
let newName=myName
newName="Ghero"
console.log(myName);
console.log(newName);

//object declaration named userOne and userTwo
let userOne={
    email:"user@abc.com",
    name:"baba"
}
let userTwo=userOne
userTwo.email="abc@123.com"
console.log(userOne.email);
console.log(userTwo.email);
