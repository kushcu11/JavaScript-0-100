//calculates the sum of squares from 1 to n if n is a positive, non-zero number

let n = 20;

if (n > 0) {
    console.log("valid number");
    var sumOfSquares = 0;
    for (let i = 1; i <= n; i++) {
        sumOfSquares += i * i;
    }
    console.log("Sum of squares:", sumOfSquares);
} else {
    console.log("please give positive and non zero!");
}
