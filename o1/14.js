let array = [1, 2, 3, 4, 5, 9];
let target = 4;
let found = false;
console.log(array);

let low = 0;
let high = array.length - 1;

while (low <= high) {
    const m = Math.floor((high + low) / 2);
    const v = array[m];
    if (v === target) {
        console.log("element found");
        found = true;
        break;
    } else if (v < target) {
        low = m + 1;
    } else {
        high = m - 1;
    }
}

if (!found) {
    console.log("element not found");
    found = false;
}