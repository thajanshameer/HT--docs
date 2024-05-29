function compareJSON(obj1, obj2) {
    const keys1 = Object.keys(obj1).sort();
    const keys2 = Object.keys(obj2).sort();

    if (keys1.length !== keys2.length || !keys1.every((key, index) => key === keys2[index])) {
        return false;
    }

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };

if (compareJSON(obj1, obj2)) {
    console.log("The JSON objects are equivalent");
} else {
    console.log("The JSON objects are not equivalent");
}
