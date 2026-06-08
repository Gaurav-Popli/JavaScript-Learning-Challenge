//array

const myArr=["baba",0,1,2,3,4,5,true,"gaurav"]

// const myHeros=["ironman","superman","batman"]
 
// console.log(myArr[0]);
// const myArr1=new Array(2,4,6,8)
//array methods
// myArr.push(6)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);
// myArr.unshift(10)//adds element at beginnig of array
// console.log(myArr);

// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(2));
// myArr.push(6)
// console.log(myArr.indexOf(2));
// const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr);

// console.log(typeof myArr);
// console.log(typeof newArr);

//slice,splice

console.log("a",myArr);

const myNewArr=myArr.slice(1,3)

console.log(myNewArr);
console.log("b",myArr);


const myNewArr1=myArr.splice(1,3)//splice(parameter1 or start ,parameter2 or end) splice method removes  values present at index 1,2,3 

console.log("c",myArr);
console.log(m yNewArr1);

