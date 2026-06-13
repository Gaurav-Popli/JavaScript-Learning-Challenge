# Day 11 - Functions, Scope, Arrow Functions and Higher Order Array Methods

## Overview

Today I learned how functions work, how scope affects variables, how arrow functions differ from regular functions, and how higher-order array methods simplify data processing.

---

# Functions

Functions help organize reusable code.

```javascript
function sayMyName(){
 console.log("G")
 console.log("A")
 console.log("U")
 console.log("R")
 console.log("A")
 console.log("V")
}
```

Call function:

```javascript
sayMyName()
```

---

# Parameters vs Arguments

Function definition:

```javascript
function addTwoNumbers(num1, num2){
 return num1 + num2
}
```

Parameters:

```javascript
num1
num2
```

---

Function call:

```javascript
addTwoNumbers(3,4)
```

Arguments:

```javascript
3
4
```

---

# Return Keyword

```javascript
function addTwoNumbers(num1,num2){
 return num1 + num2
}
```

Output:

```javascript
const result = addTwoNumbers(3,4)
```

Result:

```text
7
```

---

# Scope

Variables declared inside a block are not accessible outside.

```javascript
if(true){
 let a = 10
}
```

```javascript
console.log(a)
```

Output:

```text
Error
```

---

# Global Scope

```javascript
const username = "Gaurav"
```

Accessible throughout program.

---

# Arrow Functions

Traditional:

```javascript
function greet(){
 console.log("Hello")
}
```

Arrow:

```javascript
const greet = () => {
 console.log("Hello")
}
```

---

# this Keyword

Object example:

```javascript
const user = {
 username:"Gaurav",

 welcomeMessage:function(){
   console.log(`${this.username}`)
 }
}
```

`this` refers to current object.

---

# Important Note

Arrow functions do not have their own `this`.

```javascript
const chai = () => {
 console.log(this)
}
```

Behavior differs from regular functions.

---

# Implicit Return

```javascript
const addTwo = (num1,num2) => num1 + num2
```

No return keyword needed.

---

# forEach()

Runs function for every element.

```javascript
const coding = ["js","java","python"]

coding.forEach(function(item){
 console.log(item)
})
```

---

# filter()

Returns matching elements.

```javascript
const numbers = [1,2,3,4,5]

const result = numbers.filter(num => num > 3)
```

Output:

```javascript
[4,5]
```

---

# map()

Transforms data.

```javascript
const numbers = [1,2,3]

const result = numbers.map(num => num * 10)
```

Output:

```javascript
[10,20,30]
```

---

# reduce()

Combines array into single value.

```javascript
const arr = [1,2,3,4]

const sum = arr.reduce(
 (acc,curr)=>acc+curr,
 0
)
```

Output:

```text
10
```

---

# Understanding acc

Accumulator stores previous result.

Dry Run:

```javascript
[1,2,3]
```

Initial value:

```javascript
acc = 0
```

Step 1:

```javascript
0 + 1 = 1
```

Step 2:

```javascript
1 + 2 = 3
```

Step 3:

```javascript
3 + 3 = 6
```

Final Answer:

```text
6
```

---

# Real World Applications

## forEach()

* Sending notifications

## filter()

* Product search

## map()

* Formatting API data

## reduce()

* Shopping cart total

---

# Key Learnings

* Functions make code reusable.
* Parameters receive values.
* Scope controls accessibility.
* Arrow functions provide concise syntax.
* `this` behaves differently in arrow functions.
* Higher-order functions are heavily used in React and modern JavaScript.
* map(), filter(), and reduce() are essential developer tools.
