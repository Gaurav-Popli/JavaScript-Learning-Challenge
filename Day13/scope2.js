
function one(){
    const username="gaurav"  

    function two(){ //declaring a nested  function and in nested function child function can access variables of parent function
        const website="youtube"
        console.log(username);
    }
    //console.log(website);//since line by line execution takes place in js therefore as here error occurs therefore two() is not called

    two()
}
//one()
if(true)
{
    const username="gaurav"
    if(username==="gaurav")
    {
        const website=" youtube"
        //console.log(username+website);
    }
   // console.log(website)
}
//console.log(username)

// +++++++++++++++++++++++++++++++++interesting+++++++++++++++++


console.log(addone(2))
function addone(num){
    return num+1
}

console.log(addTwo(2))//if written above its declaration it does not gives correct output as it cannot access the function as function here is stored inside of a variable due to hoisting concept i.e acceccsing a variable before declaring

const addTwo=function(num)//it is function but is also called expression
{
    return num+2
}

console.log(addone(2))//if written above its declaration it gives correct output
console.log(addTwo(2))//if written above its declaration it does not gives correct output as it cannot access the function as function here is stored inside of a variable due to hoisting concept i.e acceccsing a variable before declaring


