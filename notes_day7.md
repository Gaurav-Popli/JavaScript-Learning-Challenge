# Day 7 - Arrays

## Overview

Today I learned how arrays store multiple values and how array methods help manage data efficiently.

---

# Creating Arrays

```javascript
const myArr = [0,1,2,3,4,5]
```

---

# Access Elements

```javascript
myArr[0]
```

Output:

```text
0
```

---

# push()

Adds element at end.

```javascript
myArr.push(6)
```

Before:

```javascript
[0,1,2,3,4,5]
```

After:

```javascript
[0,1,2,3,4,5,6]
```

---

# pop()

Removes last element.

```javascript
myArr.pop()
```

---

# unshift()

Adds element at beginning.

```javascript
myArr.unshift(9)
```

---

# shift()

Removes first element.

```javascript
myArr.shift()
```

---

# includes()

```javascript
myArr.includes(9)
```

Returns:

```javascript
true / false
```

---

# indexOf()

```javascript
myArr.indexOf(3)
```

Output:

```text
3
```

---

# join()

Converts array into string.

```javascript
myArr.join()
```

---

# slice()

Does not modify original array.

```javascript
myArr.slice(1,3)
```

---

# splice()

Modifies original array.

```javascript
myArr.splice(1,3)
```

---

# Difference

## slice()

* Original array remains unchanged

## splice()

* Original array changes

---

# Real World Applications

push():

* Add product to cart

pop():

* Remove latest item

unshift():

* Add newest notification

shift():

* Remove oldest notification

---

# Key Learnings

* Arrays store multiple values.
* Arrays use zero-based indexing.
* slice() and splice() behave differently.
* Arrays are heavily used in APIs and React.
