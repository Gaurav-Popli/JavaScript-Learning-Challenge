function one(){
    const username="gaurav"
    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
//one()

if(true)
{
    const username="gaurav"
    if(username==="gaurav")
    {
        const website=" youtube"
        console.log(username+website)
    }
    //console.log(website)

}
//console.log(username)

//+++++++++++++++++++++++++interesting+++++++++++++
console.log(addOne(9))//does not give error as function can be called and below there is the declaration of the function
function addOne(num)//function declaration addOne is function name itself
{
    return num+1
}

console.log(addTwo(5))//not possible to access variable before initialization hence gives error
const addTwo=function(num)//function declaration ans storing in a variable called addTwo note addTwo is a variable in which a function is stored
{
    return num+2
}
