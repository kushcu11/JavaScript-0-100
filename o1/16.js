// Bubble Sort Algorithm Implementation

let array = [1,6,4,2,5,3];
console.log(array)
for( let i=0; i<array.length; i++){
    for(let j= 0 ; j<array.length-1-i; j++){
        if(array[j]>array[j+1]){
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
        }
    }
}
console.log(array); // Output: [1, 2, 3, 4, 5, 6]