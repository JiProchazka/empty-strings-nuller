# Empty Strings Nuller

Replaces all fields with empty string in object with `null`:

```javascript
const obj = { a: "a", b: "" };
nullEmptyStrings(obj); // => { a: "a", b: null }
```

Works also on nested objects or objects in array.

## Installation

`$ npm i empty-strings-nuller`

## Import

Use in a stadard way:

```javascript
import nullEmptyStrings from "empty-strings-nuller";
```

or

```javascript
const nullEmptyStrings = require("empty-strings-nuller");
```
