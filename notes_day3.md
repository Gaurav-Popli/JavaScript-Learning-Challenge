# Day 3 - Conversion Operations and Operators

## Overview

Today I learned type conversion and how JavaScript handles operations involving different data types.

---

# Number Conversion

Convert string into number.

```javascript
let score = "33"
let valueInNumber = Number(score)
```

Output:

```text
33
```

---

## Invalid Number Conversion

```javascript
let score = "33abc"
let valueInNumber = Number(score)
```

Output:

```text
NaN
```

NaN = Not a Number

---

# Boolean Conversion

```javascript
Boolean(1)
```

Output:

```text
true
```

```javascript
Boolean(0)
```

Output:

```text
false
```

```javascript
Boolean("")
```

Output:

```text
false
```

```javascript
Boolean("Gaurav")
```

Output:

```text
true
```

---

# String Conversion

```javascript
let num = 33
String(num)
```

Output:

```text
"33"
```

---

# Arithmetic Operators

```javascript
+
-
*
/
%
**
```

Examples:

```javascript
2 + 2
```

```javascript
2 - 2
```

```javascript
2 * 2
```

```javascript
2 / 2
```

```javascript
2 % 2
```

```javascript
2 ** 3
```

---

# String Concatenation

```javascript
"gaurav" + " popli"
```

Output:

```text
gaurav popli
```

---

# Confusing JavaScript Operations

```javascript
"1" + 2 + 2
```

Output:

```text
122
```

Reason:

String appears first.

---

```javascript
1 + 2 + "2"
```

Output:

```text
32
```

Reason:

Numbers are added first.

---

# Unary Plus

```javascript
+true
```

Output:

```text
1
```

```javascript
+""
```

Output:

```text
0
```

---

# Increment Operator

```javascript
let gameCounter = 100
gameCounter++
```

Output:

```text
101
```

---

## Best Practice

Avoid writing:

```javascript
num1 = num2 = num3 = 2 + 2
```

Write clearly and explicitly.

---

## Key Learnings

* JavaScript automatically converts types in many situations.
* Invalid numeric conversion returns NaN.
* String concatenation can produce unexpected results.
* Always write clear and readable code.
