export default function empty(val) {

  if (val === undefined) return true;

  if (
    typeof val == "function" ||
    typeof val == "number" ||
    typeof val == "boolean" ||
    Object.prototype.toString.call(val) === "[object Date]"
  )
    return false;

  if (val == null || val.length === 0)
    return true;

  if (typeof val == "object") {

    let r = true;

    for (let f in val) r = false;

    return r;
  }

  return false;
}