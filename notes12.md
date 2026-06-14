# Day 12 - Rest Operator, Passing Objects and Arrays to Functions

## Overview

Today I learned how to pass multiple values to functions using the Rest Operator (`...`), how to pass objects directly into functions, and how to pass arrays as arguments.

These concepts are heavily used in modern JavaScript, React, Node.js, and API development.

---

# Rest Operator (...)

The Rest Operator allows a function to accept multiple arguments and store them as an array.

```javascript
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(10,20,30,40,50))
```

Output:

```javascript
[10,20,30,40,50]
```

---

## How It Works

When JavaScript sees:

```javascript
...num1
```

It collects all arguments into a single array.

Dry Run:

```javascript
calculateCartPrice(10,20,30,40,50)
```

JavaScript creates:

```javascript
num1 = [10,20,30,40,50]
```

Returned value:

```javascript
[10,20,30,40,50]
```

---

# Rest Operator with Normal Parameters

```javascript
function calculateCartPrice(val1,val2,...num1){
    return num1
}
```

Function Call:

```javascript
calculateCartPrice(10,20,30,40,50)
```

---

## Dry Run

Step 1:

```javascript
val1 = 10
```

Step 2:

```javascript
val2 = 20
```

Step 3:

Remaining values go into:

```javascript
num1 = [30,40,50]
```

Output:

```javascript
[30,40,50]
```

---

## Why Use Rest Operator?

Useful when number of arguments is unknown.

Example:

Shopping Cart

```javascript
calculateCartPrice(
  199,
  299,
  499,
  999
)
```

Products can vary in quantity, so Rest Operator helps handle them dynamically.

---

# Passing Objects to Functions

Object:

```javascript
const user = {
    username:"gaurav",
    price:199
}
```

Function:

```javascript
function handleObject(anyobject){
    console.log(
      `Username is ${anyobject.username}
       and price is ${anyobject.price}`
    );
}
```

Call:

```javascript
handleObject(user)
```

Output:

```text
Username is gaurav and price is 199
```

---

# Passing Object Directly

Instead of creating variable first:

```javascript
handleObject({
    username:"gaurav",
    price:1000
})
```

Output:

```text
Username is gaurav and price is 1000
```

---

## Important Observation

Object property names must match.

Object:

```javascript
const user = {
    username:"gaurav",
    prices:199
}
```

Function:

```javascript
anyobject.price
```

Output:

```text
undefined
```

Reason:

JavaScript searches for:

```javascript
price
```

but object contains:

```javascript
prices
```

Different names = undefined.

---

# Real World Example

API Response:

```javascript
const user = {
    username:"gaurav",
    email:"gaurav@gmail.com",
    age:20
}
```

Function:

```javascript
function displayUser(user){
    console.log(user.username)
}
```

This pattern is used everywhere in React and APIs.

---

# Passing Arrays to Functions

Array:

```javascript
const arr = [1,2,3,4,5]
```

Function:

```javascript
function handleArray(array){
    return array[2]
}
```

Call:

```javascript
handleArray(arr)
```

Output:

```javascript
3
```

---

# Passing Array Directly

```javascript
console.log(
    handleArray([11,22,33])
)
```

Output:

```javascript
33
```

---

## Dry Run

Array:

```javascript
[11,22,33]
```

Indexes:

```javascript
0 -> 11
1 -> 22
2 -> 33
```

Function returns:

```javascript
array[2]
```

Output:

```javascript
33
```

---

# Why Pass Arrays to Functions?

Useful when working with:

* Student Lists
* Product Lists
* API Data
* User Records
* Search Results

Example:

```javascript
const products = [
    "Laptop",
    "Phone",
    "Tablet"
]
```

Function:

```javascript
function getFirstProduct(products){
    return products[0]
}
```

---

# Key Concepts Learned

### Rest Operator

```javascript
...num1
```

Collects remaining arguments into an array.

---

### Object as Argument

```javascript
handleObject(user)
```

Entire object can be passed to function.

---

### Direct Object Passing

```javascript
handleObject({
    username:"gaurav",
    price:1000
})
```

No variable needed.

---

### Array as Argument

```javascript
handleArray(arr)
```

Entire array can be passed.

---

# Interview Questions

### What is Rest Operator?

The Rest Operator (`...`) collects multiple arguments into a single array.

---

### Difference Between Rest and Spread Operator?

Rest:

```javascript
function demo(...nums){}
```

Collects values.

Spread:

```javascript
const arr2 = [...arr1]
```

Expands values.

---

### Can Objects Be Passed to Functions?

Yes.

Objects are passed by reference.

---

### Can Arrays Be Passed to Functions?

Yes.

Arrays are reference data types and can be passed directly.

---

# Real World Applications

### E-commerce

```javascript
calculateCartPrice(...)
```

Calculate total cart value.

### APIs

```javascript
handleObject(user)
```

Display user information.

### Dashboards

```javascript
handleArray(products)
```

Access product data.

---

# Key Takeaways

* Rest Operator collects multiple arguments into an array.
* Normal parameters are filled first, Rest Operator gets remaining values.
* Objects can be passed directly into functions.
* Arrays can be passed directly into functions.
* Property names must match exactly.
* These concepts are heavily used in React, Node.js, and API development.
