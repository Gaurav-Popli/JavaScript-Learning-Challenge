// function sayMyName(){
//     console.log("G");
//     console.log("A");
//     console.log("U");
//     console.log("R");
//     console.log("A");
//     console.log("V");
// }
// sayMyName();

// function sum(a,b){
// //   let result=a+b;
// //   return result;//after return nothing will execute in the function
// //   console.log("This will not execute"); 
//     return a+b;//we can directly return the result without storing it in a variable
// }
// // const result=sum(3,4);
// // console.log("result: ", result);
// console.log(sum(3,4));

// function loginUserMessage(username){
//     if (username===undefined){
//         console.log("Please enter username");
//         return;
//     }
//     return `${username} just logged in`;
// }

// function loginUserMessage(username){
//     if (!username){     //means if username is falsy(i.e., undefined, null, 0, false, empty string) then it will execute the code inside if block
//         console.log("Please enter username");
//         return;
//     }
//     return `${username} just logged in`;
// }

function loginUserMessage(username="sam"){//returns sam just logged in if no value is provided as a parameter and if the value is provided then it will return that value just logged in
    if (username===undefined){
        console.log("Please enter username");
        return;
    }
    return `${username} just logged in`;
}


// console.log(loginUserMessage("Gaurav"));
//// if a person does passes empty quotes("")as parameter in function then it will be print empty space like only "just logged in without username"
// if a person does not pass parameter in function then it will be print undefined
console.log(loginUserMessage());
// console.log(loginUserMessage(""));
// console.log(loginUserMessage("gaurav"));