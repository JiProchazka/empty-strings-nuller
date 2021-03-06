import { isPlainObject } from "lodash.isplainobject";
import { isString } from "lodash.isstring";
import { transform } from "lodash.transform";

export default function nullEmptyStrings(object) {
  // is array
  if (Array.isArray(object)) {
    return object.map((obj) => nullEmptyStrings(obj));
  } // is a plain object
  else if (isPlainObject(object)) {
    return transform(object, (result, value, key) => {
      if (isString(value) && value.trim() === "") {
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
}
