# Day 9 - Advanced Objects

## Overview

Today I explored advanced object concepts such as singleton objects, nested objects, object merging, object utility methods, and checking object properties.

---

# Singleton Object

Object created using constructor.

```javascript
const tinderUser = new Object()
```

Output:

```javascript
{}
```

---

# Object Literal

```javascript
const tinderUser = {}
```

Both create objects, but constructor syntax creates a singleton object.

---

# Adding Properties

```javascript
tinderUser.id = "123abc"
tinderUser.name = "Gaurav"
tinderUser.isLoggedIn = false
```

---

# Nested Objects

```javascript
const regularUser = {
 email: "user@gmail.com",
 fullname: {
   userfullname: {
      firstname: "Gaurav",
      lastname: "Popli"
   }
 }
}
```

Access:

```javascript
regularUser.fullname.userfullname.firstname
```

Output:

```text
Gaurav
```

---

# Combining Objects

## Using Object.assign()

```javascript
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3 = Object.assign({}, obj1, obj2)
```

---

## Using Spread Operator

Modern approach:

```javascript
const obj3 = {...obj1, ...obj2}
```

Preferred in modern JavaScript.

---

# Arrays of Objects

Very common in APIs.

```javascript
const users = [
 {
   id: 1,
   email: "a@gmail.com"
 },
 {
   id: 2,
   email: "b@gmail.com"
 }
]
```

Access:

```javascript
users[0].email
```

---

# Object.keys()

Returns all keys.

```javascript
Object.keys(tinderUser)
```

Output:

```javascript
["id","name","isLoggedIn"]
```

---

# Object.values()

Returns all values.

```javascript
Object.values(tinderUser)
```

---

# Object.entries()

Converts object into array format.

```javascript
Object.entries(tinderUser)
```

Output:

```javascript
[
 ["id","123abc"],
 ["name","Gaurav"]
]
```

---

# hasOwnProperty()

Checks property existence.

```javascript
tinderUser.hasOwnProperty("isLoggedIn")
```

Output:

```text
true
```

---

# Real World Applications

* User profiles
* Product catalogs
* Shopping carts
* API responses
* Database records

---

# Key Learnings

* Objects can be nested.
* Spread operator is preferred for merging.
* APIs frequently return arrays of objects.
* Object utility methods simplify data handling.
