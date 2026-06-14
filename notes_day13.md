# Day 13 - Scope, Nested Functions and Hoisting

## Overview

Today I learned how JavaScript handles variable accessibility through scopes, how nested functions inherit variables from parent functions, and how hoisting behaves differently for function declarations and function expressions.

---

# What is Scope?

Scope determines where a variable can be accessed in a program.

There are mainly:

1. Global Scope
2. Block Scope
3. Function Scope

---

# Global Scope

Variables declared outside any block or function belong to global scope.

```javascript
let a = 3000

console.log(a)
```

Output:

```text
3000
```

Global variables can be accessed throughout the program.

---

# Block Scope

A block is created using:

```javascript
{
}
```

Example:

```javascript
if(true){
    let a = 10
    const b = 20
}
```

Both variables exist only inside that block.

---

## let and const are Block Scoped

```javascript
if(true){
    let a = 10
}

console.log(a)
```

Output:

```text
ReferenceError
```

Reason:

Variable exists only inside the block.

---

## Problem with var

```javascript
if(true){
    var c = 30
}

console.log(c)
```

Output:

```text
30
```

Even though it was declared inside the block.

This is one reason modern JavaScript prefers:

```javascript
let
const
```

instead of:

```javascript
var
```

---

# Dangerous Practice

```javascript
if(true){
    d = 31
}
```

Output:

```text
31
```

Why?

Because JavaScript automatically creates a global variable when no keyword is used.

Avoid this practice.

Always use:

```javascript
let
const
```

---

# Global Scope vs Block Scope

```javascript
let a = 3000

if(true){
    let a = 10
    console.log(a)
}
```

Output:

```text
10
```

Outside:

```javascript
console.log(a)
```

Output:

```text
3000
```

Both variables are different.

---

# Nested Functions

Parent Function:

```javascript
function one(){
    const username = "gaurav"
}
```

Child Function:

```javascript
function two(){
    const website = "youtube"
}
```

---

# Accessing Parent Variables

```javascript
function one(){

    const username = "gaurav"

    function two(){
        console.log(username)
    }

    two()
}
```

Output:

```text
gaurav
```

Child function can access parent variables.

---

# Accessing Child Variables

```javascript
function one(){

    const username = "gaurav"

    function two(){
        const website = "youtube"
    }

    console.log(website)
}
```

Output:

```text
ReferenceError
```

Parent cannot access child variables.

---

# Lexical Scope

JavaScript follows Lexical Scope.

Meaning:

A child function automatically gets access to variables declared in its parent scope.

Visualization:

```text
Global Scope
    |
    |-- one()
            |
            |-- two()
```

two() can access:

* its own variables
* variables of one()
* global variables

---

# Nested if Blocks

```javascript
if(true){

    const username = "gaurav"

    if(username === "gaurav"){
        const website = "youtube"
        console.log(username + website)
    }
}
```

Output:

```text
gauravyoutube
```

Inner block can access outer block variables.

---

# Function Declaration

```javascript
function addone(num){
    return num + 1
}
```

Call:

```javascript
addone(2)
```

Output:

```text
3
```

---

# Hoisting

Interesting behavior:

```javascript
console.log(addone(2))

function addone(num){
    return num + 1
}
```

Output:

```text
3
```

Works successfully.

Reason:

Function declarations are hoisted.

---

# Function Expression

```javascript
const addTwo = function(num){
    return num + 2
}
```

Call:

```javascript
addTwo(2)
```

Output:

```text
4
```

---

# Important Difference

This works:

```javascript
console.log(addone(2))

function addone(num){
    return num + 1
}
```

But this fails:

```javascript
console.log(addTwo(2))

const addTwo = function(num){
    return num + 2
}
```

Output:

```text
ReferenceError
```

Reason:

The variable addTwo is not initialized yet.

---

# Why Does This Happen?

JavaScript Hoisting Rules:

### Function Declaration

Entire function is moved to memory.

```javascript
function addone(){}
```

Can be called before declaration.

---

### Function Expression

Only variable is hoisted.

```javascript
const addTwo
```

Function assignment happens later.

Therefore:

```javascript
addTwo()
```

cannot be used before initialization.

---

# Real World Applications

### Scope

Used to protect data and avoid accidental modifications.

### Nested Functions

Used heavily in:

* Closures
* Event Handlers
* React Components

### Hoisting Knowledge

Helps debug:

```javascript
undefined
ReferenceError
```

issues.

---

# Common Mistakes

### Using var

```javascript
var score = 10
```

Can create unexpected scope issues.

Prefer:

```javascript
let
const
```

---

### Accessing Child Scope Variables

```javascript
console.log(website)
```

outside child scope.

Results in:

```text
ReferenceError
```

---

### Calling Function Expressions Early

```javascript
addTwo()
```

before declaration.

Produces error.

---

# Interview Questions

### What is Scope?

Scope determines where variables can be accessed.

---

### Difference Between Global and Block Scope?

Global Scope:

Accessible everywhere.

Block Scope:

Accessible only inside its block.

---

### Why is var avoided?

Because it ignores block scope and may cause unexpected behavior.

---

### What is Lexical Scope?

Child functions can access variables of parent functions.

---

### What is Hoisting?

JavaScript's behavior of moving declarations to memory before execution.

---

### Difference Between Function Declaration and Function Expression?

Function Declaration:

```javascript
function demo(){}
```

Hoisted completely.

Function Expression:

```javascript
const demo = function(){}
```

Not fully hoisted.

---

# Key Takeaways

* let and const are block scoped.
* var should generally be avoided.
* Child functions can access parent variables.
* Parent functions cannot access child variables.
* JavaScript follows lexical scope.
* Function declarations are hoisted.
* Function expressions behave differently during hoisting.
* Understanding scope is essential for React, Node.js, and modern JavaScript development.
