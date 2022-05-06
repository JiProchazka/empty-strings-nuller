const isPlainObject = require("lodash.isplainobject");
const transform = require("lodash.transform");

module.exports = function nullEmptyStrings(object) {
  // is array
  if (Array.isArray(object)) {
    return object.map((obj) => nullEmptyStrings(obj));
  } // is a plain object
  else if (isPlainObject(object)) {
    return transform(object, (result, value, key) => {
      if (value.trim() === "") {
        value = null;
      }

      if (isPlainObject(value)) {
        value = nullEmptyStrings(value);
      }

      result[key] = value;
    });
  } // everything else
  else {
    return object;
  }
};
