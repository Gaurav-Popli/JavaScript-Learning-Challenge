# Day 4 - Comparisons and Data Types Summary

## Overview

Today I learned how comparison operators work and explored primitive vs non-primitive data types.

---

# Comparison Operators

```javascript
>
<
>=
<=
==
!=
===
```

Examples:

```javascript
2 > 1
```

Output:

```text
true
```

```javascript
2 < 1
```

Output:

```text
false
```

---

# Type Conversion During Comparison

```javascript
"2" > 1
```

Output:

```text
true
```

Reason:

JavaScript converts `"2"` into number 2.

---

# Null Comparisons

```javascript
null > 0
```

Output:

```text
false
```

```javascript
null >= 0
```

Output:

```text
true
```

These results can be confusing due to JavaScript's internal conversion rules.

---

# Undefined Comparisons

```javascript
undefined > 0
```

Output:

```text
false
```

```javascript
undefined < 0
```

Output:

```text
false
```

```javascript
undefined == 0
```

Output:

```text
false
```

---

# Strict Equality

```javascript
"2" === 2
```

Output:

```text
false
```

Reason:

Strict equality checks both:

* Value
* Datatype

---

# Primitive Data Types

JavaScript has 7 primitive types:

1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol
7. BigInt

---

# Symbol

Creates unique values.

```javascript
const id = Symbol("122")
const anotherId = Symbol("122")
```

```javascript
console.log(id === anotherId)
```

Output:

```text
false
```

Even with same value, symbols remain unique.

---

# BigInt

Used for very large numbers.

```javascript
const bigNumber = 6099889090393737380n
```

---

# Non-Primitive Data Types

## Arrays

```javascript
const heroes = ["Ironman", "Captain America"]
```

---

## Objects

```javascript
const user = {
  name: "Gaurav",
  age: 20
}
```

---

## Functions

```javascript
const myFunction = function() {
  console.log("Gaurav")
}
```

---

# Memory Concept

## Primitive Types

Stored using Copy of Value.

Also called:

Call By Value

---

## Non-Primitive Types

Stored using Reference.

Changes can affect original data.

---

## Key Learnings

* Avoid loose comparisons involving null and undefined.
* Use `===` whenever possible.
* Symbols always create unique identifiers.
* Arrays, Objects, and Functions are reference types.
* Primitive values are copied, reference values share memory locations.
