# Day 2 - Variables and Data Types

## Overview

Today I learned how JavaScript stores information using variables and the different data types available.

---

# Variables

Variables are containers used to store data.

## const

Used when value should never change.

```javascript
const accountId = 12345
```

Cannot be reassigned.

```javascript
accountId = 500
```

Output:

```text
Error
```

---

## let

Used for values that may change later.

```javascript
let accountEmail = "abc@gmail.com"
```

```javascript
accountEmail = "xyz@gmail.com"
```

Allowed.

---

## var

Older way of creating variables.

```javascript
var accountPassword = "1234"
```

Avoid using `var` because of scope-related issues.

---

## Undefined Variables

```javascript
let accountState;
```

Output:

```javascript
undefined
```

Meaning:

Variable exists but has no value assigned.

---

## console.table()

Displays multiple values in table format.

```javascript
console.table([
 accountId,
 accountEmail,
 accountPassword
])
```

Useful when debugging.

---

# Data Types

JavaScript mainly has two categories:

## Primitive Data Types

### Number

```javascript
let age = 20
```

### String

```javascript
let name = "Gaurav"
```

### Boolean

```javascript
let isLoggedIn = true
```

### Null

Represents intentional absence of value.

```javascript
let temperature = null
```

### Undefined

Variable declared but not assigned.

```javascript
let state;
```

### Symbol

Used to create unique identifiers.

### BigInt

Used for very large integers.

---

# typeof Operator

Used to check datatype.

```javascript
console.log(typeof "Gaurav")
```

Output:

```text
string
```

Examples:

```javascript
typeof 20
```

Output:

```text
number
```

```javascript
typeof true
```

Output:

```text
boolean
```

---

## Special Case

```javascript
typeof null
```

Output:

```text
object
```

This is a well-known JavaScript bug.

---

## Key Learnings

* Prefer `const` and `let`.
* Avoid `var`.
* JavaScript supports multiple primitive types.
* `typeof` helps identify data types.
* `null` returns `"object"` due to a historical bug.
