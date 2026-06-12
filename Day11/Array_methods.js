// Array methods in JavaScript



// 1.push method: is used to add element at the end of the array and it returns the length of the array after adding the element
const array1=[1,2,3,4,5]//array definition
const array2=array1.push(60)//using push method to add element at the end of the array
console.log(array2)//push method returns the length of the array after adding the element
console.log(array1)//array after adding the element
//original array is modified after using push method because push method modifies the original array and returns the length of the array after adding the element

//2.pop method: is used to remove the last element of the array and it returns the removed element
const array3=[1,2,3,4,5]//array definition
const array4=array3.pop()//using pop method to remove the last element of the array
console.log(array4)//pop method returns the removed element
console.log(array3)//array after removing the last element
//original array is modified after using pop method because pop method modifies the original array and returns the removed element


//3. unshift method: is used to add element at the beginning of the array and it returns the length of the array after adding the element
const array5=[1,2,3,4,5]//array definition
const array6=array5.unshift(0)//using unshift method to add element at the beginning of the array
console.log(array6)//unshift method returns the length of the array after adding the element
console.log(array5)//array after adding the element
//original array is modified after using unshift method because unshift method modifies the original array and returns the length of the array after adding the element


//4.shift method: is used to remove the first element of the array and it returns the removed element
const array7=[1,2,3,4,5]//array definition
const array8=array7.shift()//using shift method to remove the first element of the array
console.log(array8)//shift method returns the removed element
console.log(array7)//array after removing the first element
//original array is modified after using shift method because shift method modifies the original array and returns the removed element

//5. slice method: is used to extract a portion of the array and it returns a new array
const array11=[1,2,3,4,5]//array definition
const array12=array11.slice(2,4)//using slice method to extract a portion of the array
console.log(array12)//slice method returns a new array
console.log(array11)//original array is not modified after using slice method because slice method does not modify the original array and returns a new array
//original array is not modified after using slice method because slice method does not modify the original array and returns a new array



//6. splice method: is used to add or remove element from the array and it returns the removed element
const array9=[1,2,3,4,5]//array definition
const array10=array9.splice(1,3)//using splice method to remove element from the array
console.log(array10)//splice method returns the removed element
console.log(array9)//array after removing the element
//original array is modified after using splice method because splice method modifies the original array and returns the removed element


//7. indexOf method: is used to find the index of the first occurrence of the element in the array and it returns the index of the element
const array13=[1,2,3,4,5]//array definition
const array14=array13.indexOf(5)//using indexOf method to find the index of the first occurrence of the element in the array
console.log(array14)//indexOf method returns the index of the element array14 is just a variable that stores the index of the element and it does not modify the original array also it itself is not an array it is just a variable that stores the index of the element
console.log(array13)//original array is not modified after using indexOf method because indexOf method does not modify the original array and returns the index of the element

//8. includes method: is used to check whether the element is present in the array or not and it returns true or false
const array15=[1,2,3,4,5]//array definition
const array16=array15.includes(3)//using includes method to check whether the element is present in the array or not
console.log(array16)//includes method returns true or false
console.log(array15)//original array is not modified after using includes method because includes method does not modify the original array and returns true or false

//9. join method: is used to join the elements of the array and it returns a string
const array17=[1,2,3,4,5]//array definition
const array18=array17.join("-")//using join method to join the elements of the array
console.log(array18)//join method returns a string
console.log(array17)//original array is not modified after using join method because join method does not modify the original array and returns a string

//10. flat method: is used to flatten the nested array and it returns a new array
const array19=[1,2,[3,4],5,[22,33,[11,111]]]//array definition
const array20=array19.flat(Infinity)//using flat method to flatten the nested array 
console.log(array20)//flat method returns a new array
console.log(array19)//original array is not modified after using flat method because flat method does not modify the original array and returns a new array
