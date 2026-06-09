//singleton

//object.create creates single
//object literals

const mySymbol=Symbol("key1")

//all elemets inside object like name agea email etc are called object properties and they are key value pairs where key is the name of the property and value is the value assigned to that property
const JsUser={
    name:"Gaurav",
    [mySymbol]:"mysymbol value",//correct way to use symbol as a key in an object i.e. in square brackets
    age:20,
    place:"Dhule",
    email:"abc@xyz.com",
    isLoggedIn:true,
    lastLoginDays:["monday","tuesday"],
    "full name":"Gaurav Popli"
}

// console.log(JsUser.email);//u cant access "full name" using this method
// console.log(JsUser["email"]);//better than above in some cases as  ** u can access "full name" using this way
// console.log(JsUser["full name"]);

// console.log(JsUser[mySymbol]);//undefined as we have not assigned any value to this symbol key

// JsUser.email="xyx.abc.com";//updating value of email key
// console.log(JsUser.email); 

// Object.freeze(JsUser);//freezing the object to prevent any modifications to its values or structure

console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS User")
}
console.log(JsUser.greeting())

JsUser.myGreeting=function(){
    console.log(`Hello ${this.name} welcome to JS learning your age is ${this.age}`)//this keyword refers to the current object which is JsUser in this case and allows us to access the properties of the object within the method.
}
console.log(JsUser.myGreeting())