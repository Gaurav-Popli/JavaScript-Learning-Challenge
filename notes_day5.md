# Day 5 - Strings

## Overview

Today I learned how strings work in JavaScript and explored various built-in string methods used in real-world applications.

---

# What is a String?

A string is a sequence of characters enclosed in quotes.

```javascript
const name = "Gaurav"
```

---

# String Concatenation

Old way:

```javascript
const name = "Gaurav"
const repoCount = 10

console.log(name + repoCount)
```

Output:

```text
Gaurav10
```

---

# Template Literals

Modern approach:

```javascript
const name = "Gaurav"
const repoCount = 10

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
```

Benefits:

* Cleaner syntax
* Easier to read
* Widely used in modern JavaScript

---

# String Object

```javascript
const gameName = new String("gaurav")
```

String object provides many useful methods.

---

# Access Characters

```javascript
gameName[0]
```

Output:

```text
g
```

---

# length

Returns total characters.

```javascript
gameName.length
```

Output:

```text
6
```

---

# toUpperCase()

```javascript
gameName.toUpperCase()
```

Output:

```text
GAURAV
```

---

# charAt()

Returns character at a position.

```javascript
gameName.charAt(2)
```

Output:

```text
u
```

---

# indexOf()

Returns position of character.

```javascript
gameName.indexOf('r')
```

Output:

```text
3
```

---

# substring()

Extracts part of string.

```javascript
gameName.substring(0,4)
```

Output:

```text
gaur
```

---

# slice()

Works similar to substring but supports negative indexes.

```javascript
gameName.slice(-6,4)
```

---

# trim()

Removes extra spaces.

```javascript
const userName = "   gaurav   "
userName.trim()
```

Output:

```text
gaurav
```

---

# replace()

```javascript
const url = "https://gaurav.com%20popli"

url.replace('%20','-')
```

Output:

```text
https://gaurav.com-popli
```

---

# includes()

Checks if value exists.

```javascript
gameName.includes("rav")
```

Output:

```text
true
```

---

# split()

Converts string into array.

```javascript
const sentence = "I-love-javascript"

sentence.split("-")
```

Output:

```javascript
["I","love","javascript"]
```

---

# Real World Applications

* Search bars
* Username validation
* URL formatting
* Chat applications
* Form handling

---

# Key Learnings

* Strings are immutable.
* Template literals are preferred.
* String methods simplify text manipulation.
* Many web applications rely heavily on string processing.
