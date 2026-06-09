//array

 const myArr=[10,1,2,3,4,5]

// const myHeros=["ironman","superman","batman"]
 
// console.log(myArr[0]);
// const myArr1=new Array(2,4,6,8)// method to define array

// //array methods// //


// myArr.push(6)//adds element at last index of array
// console.log(myArr);

// myArr.pop()//deletes last elemnt of array
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

 const myNewArr=myArr.slice(1,3)//displays elements atartsing from position

// console.log(myNewArr);
// console.log("b",myArr);


// const myNewArr1=myArr.splice(1,3)//splice(parameter1 or start ,parameter2 or end) splice method removes  values present at index 1,2,3 

// console.log("c",myArr);
// console.log(myNewArr1);

//part2


const m_hero=["ironman","thor","hulk"]
const dc_hero=["batman","superman","flash"]
// m_hero.push(dc_hero)//adds dc heros as a singl elemnt in m_hero array
// console.log(m_hero);
// console.log(m_hero[3]);//gives[ 'batman', 'superman', 'flash' ] as output

// console.log(m_hero[3][1]);//gives superman as output like in [ 'batman', 'superman', 'flash' ] element at index 1
// const all_hero=m_hero.concat(dc_hero);
// console.log(all_hero);//returns new array with erged values of m_hero and dc_hero

const all_new_hero=[...m_hero,...dc_hero]//called as spread operator  //somilar function to concat
console.log(all_new_hero);

const Arr1=[1,2,3,[4,5,6],7,8,[11,[22,33]]]

const real_another_array=Arr1.flat(Infinity)
console.log(real_another_array);




console.log(Array.isArray("Gaurav"))

const A =Array.from("Gaurav")
console.log(A)

console.log(Array.from({name:"Gaurav"}))//imp and fasinating

let score1=10
let score2=20
let score3=30

console.log(Array.of(score1,score2,score3));//creates array
