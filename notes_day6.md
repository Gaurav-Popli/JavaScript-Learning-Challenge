# Day 6 - Numbers, Math and Dates

## Overview

Today I learned how JavaScript handles numbers, mathematical operations, and date/time management.

---

# Number

```javascript
const score = 400
```

---

# Number Object

```javascript
const balance = new Number(100)
```

---

# toString()

Converts number into string.

```javascript
balance.toString()
```

---

# toFixed()

Controls decimal places.

```javascript
const amount = 123.456

amount.toFixed(2)
```

Output:

```text
123.46
```

---

# toPrecision()

Controls total digits.

```javascript
const num = 123.8966

num.toPrecision(4)
```

Output:

```text
123.9
```

---

# toLocaleString()

Formats numbers.

```javascript
const hundreds = 1000000

hundreds.toLocaleString()
```

Output:

```text
1,000,000
```

---

# Math Object

---

## Math.abs()

```javascript
Math.abs(-4)
```

Output:

```text
4
```

---

## Math.round()

```javascript
Math.round(4.6)
```

Output:

```text
5
```

---

## Math.ceil()

```javascript
Math.ceil(4.2)
```

Output:

```text
5
```

---

## Math.floor()

```javascript
Math.floor(4.9)
```

Output:

```text
4
```

---

## Math.min()

```javascript
Math.min(4,3,6,8)
```

Output:

```text
3
```

---

## Math.max()

```javascript
Math.max(4,3,6,8)
```

Output:

```text
8
```

---

# Random Numbers

```javascript
Math.random()
```

Returns a value between:

```text
0 and 1
```

---

# Random Number Between Range

```javascript
const min = 10
const max = 20

Math.floor(Math.random() * (max - min + 1)) + min
```

---

# Dates

Create Date:

```javascript
const myDate = new Date()
```

---

# Common Methods

```javascript
myDate.toString()
myDate.toDateString()
myDate.toLocaleString()
```

---

# Timestamp

```javascript
Date.now()
```

Returns milliseconds since January 1, 1970.

---

# Real World Applications

* OTP generation
* Dice games
* Lottery systems
* Scheduling systems
* Attendance systems

---

# Key Learnings

* Number object provides formatting methods.
* Math object contains useful mathematical utilities.
* Random numbers are widely used in applications.
* Dates are essential in almost every project.
