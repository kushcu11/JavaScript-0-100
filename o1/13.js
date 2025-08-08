let array = [1,2,3,4,5,9]
let target = 90;
let found = false

console.log(array)
for(let i = 0; i < array.length; i++){
    if(array[i] === target){
        console.log("element found")
        found = true;
        break;
    }
}
if (!found) {
    console.log("element not found");
}