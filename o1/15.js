//You are given two identical crystal balls and a building with n floors.
//A crystal ball will break if dropped from a certain floor or any floor above it, and will not break if dropped from any floor below.
//The exact threshold floor is unknown.
//You need to find the lowest floor from which a crystal ball will break, while minimizing the number of drops in the worst case.


function twoCrystalBalls(breaks) {
    const inputJump = Math.floor(Math.sqrt(breaks.length))
    let i= inputJump;

    for(; i < breaks.length; i += inputJump) {
        if (breaks[i]) {
            break;
        }
    }

    i -= inputJump;
    for (let j = i; j < i + inputJump && j < breaks.length; j++) {
        if (breaks[j]) {
            return j;
        }
    }
    return -1; // If no break found, return -1
}

// ------------------ TESTS ------------------

function testTwoCrystalBalls() {
    // Example building: first break at floor 37
    let floors = Array(37).fill(false).concat(Array(63).fill(true));
    console.assert(twoCrystalBalls(floors) === 37, "Test 1 Failed");

    // No breaks
    floors = Array(100).fill(false);
    console.assert(twoCrystalBalls(floors) === -1, "Test 2 Failed");

    // Break from first floor
    floors = Array(50).fill(true);
    console.assert(twoCrystalBalls(floors) === 0, "Test 3 Failed");

    console.log("All tests passed!");
}

testTwoCrystalBalls();
