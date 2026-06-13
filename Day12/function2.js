// function calculateCartPrice(...num1){   //using rest operator to take multiple arguments in function
//     return num1
// }
// console.log(calculateCartPrice(10, 20, 30, 40, 50));

function calculateCartPrice(val1,val2,...num1){   //using rest operator to take multiple arguments in function, val1 and val2 store 1st two numbers of array and return rest of the arrayy
    return num1
}
console.log(calculateCartPrice(10, 20, 30, 40, 50));

const user={
    username:"gaurav",
    price:199           //here if u change from price to prices and call below as anyobject.price it will give undefined
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"gaurav",
    price:1000
})

const arr=[1,2,3,4,5]

function handleArray(array){
    return array[2]//return position 2 from array
}
// console.log(handleArray(arr));
console.log(handleArray([11,22,33]));