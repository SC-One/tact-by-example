import examples from "../routes/(examples)/examples.json";
import path from "path";

export function getExample(page: string) {
  const id = path.basename(path.dirname(page));
  let i;
  for (i = 0; i < examples.length; i++) {
    if (examples[i].id == id) break;
  }
  return {
    self: examples[i],
    prev: examples[i - 1],
    next: examples[i + 1],
  };
}

export function convertToText(obj: any): string {
  //create an array that will later be joined into a string.
  var string = [];

  //is object
  //    Both arrays and objects seem to return "object"
  //    when typeof(obj) is applied to them. So instead
  //    I am checking to see if they have the property
  //    join, which normal objects don't have but
  //    arrays do.
  if (obj == undefined) {
    return String(obj);
  } else if (typeof obj == "object" && obj.join == undefined) {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) string.push(prop + ": " + convertToText(obj[prop]));
    }
    return "{" + string.join(", ") + "}";

    //is array
  } else if (typeof obj == "object" && !(obj.join == undefined)) {
    for (const prop in obj) {
      string.push(convertToText(obj[prop]));
    }
    return "[" + string.join(",") + "]";

    //is function
  } else if (typeof obj == "function") {
    string.push(obj.toString());

    //all other values can be done with JSON.stringify
  } else {
    if (typeof obj == "string") string.push(JSON.stringify(obj));
    else if (typeof obj == "bigint") string.push(obj.toString());
    else string.push(obj.toString());
  }

  return string.join(",");
}
