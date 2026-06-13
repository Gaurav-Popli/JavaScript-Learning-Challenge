# Day 10 - Object Destructuring and JSON

## Overview

Today I learned object destructuring and understood how APIs exchange data using JSON.

---

# Object Destructuring

Object:

```javascript
const course = {
 courseName: "JavaScript",
 price: 999,
 courseInstructor: "Hitesh"
}
```

---

# Traditional Access

```javascript
console.log(course.courseInstructor)
```

---

# Destructuring

```javascript
const { courseInstructor } = course
```

Now use directly:

```javascript
console.log(courseInstructor)
```

---

# Renaming Variables

```javascript
const { courseInstructor: instructor } = course
```

Now:

```javascript
console.log(instructor)
```

Output:

```text
Hitesh
```

---

# Why Destructuring?

Without destructuring:

```javascript
course.courseInstructor
course.price
course.courseName
```

Repeated many times.

With destructuring:

```javascript
const {courseInstructor, price, courseName} = course
```

Cleaner and easier to read.

---

# API Introduction

Modern applications communicate through APIs.

Examples:

* Instagram
* WhatsApp
* YouTube
* Amazon

---

# JSON

JavaScript Object Notation

Data exchange format used by APIs.

---

# JSON Object Format

```json
{
 "name":"Gaurav",
 "course":"JavaScript",
 "price":"999"
}
```

---

# Array of Objects

Common API response:

```json
[
 {
   "name":"Gaurav"
 },
 {
   "name":"Mayur"
 }
]
```

---

# Difference Between Object and JSON

## JavaScript Object

```javascript
const user = {
 name: "Gaurav"
}
```

Keys may be unquoted.

---

## JSON

```json
{
 "name":"Gaurav"
}
```

Keys are enclosed in quotes.

---

# Real World Applications

* Fetching user data
* Product listings
* Social media feeds
* Payment systems

---

# Key Learnings

* Destructuring improves readability.
* APIs usually return JSON.
* JSON is language-independent.
* Arrays of objects are common API responses.
