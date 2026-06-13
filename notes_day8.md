# Day 8 - Objects

## Overview

Today I learned how objects store data using key-value pairs.

---

# Object Literal

```javascript
const JsUser = {
 name: "Gaurav",
 age: 20,
 location: "India"
}
```

---

# Accessing Properties

Dot Notation:

```javascript
JsUser.name
```

Bracket Notation:

```javascript
JsUser["name"]
```

---

# Symbol as Key

```javascript
const mySym = Symbol("key1")
```

```javascript
const user = {
 [mySym]: "mykey1"
}
```

---

# Updating Values

```javascript
JsUser.age = 21
```

---

# Freeze Object

```javascript
Object.freeze(JsUser)
```

After freezing:

```javascript
JsUser.age = 25
```

Will not change object.

---

# Functions Inside Objects

```javascript
JsUser.greeting = function(){
 console.log("Hello JS User")
}
```

---

# Using this

```javascript
JsUser.greetingTwo = function(){
 console.log(`Hello ${this.name}`)
}
```

Output:

```text
Hello Gaurav
```

---

# Why Objects Matter

Most data received from APIs comes in object format.

Example:

```javascript
const user = {
 id: 1,
 username: "gaurav",
 email: "abc@gmail.com"
}
```

---

# Real World Applications

* User profiles
* Product information
* API responses
* Database records

---

# Key Learnings

* Objects store data using key-value pairs.
* Dot and bracket notation access properties.
* Functions can be stored inside objects.
* this refers to current object.
