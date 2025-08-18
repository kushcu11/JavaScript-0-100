function topKFrequent(nums, k) {
    let freqMap = new Map();

    // Count frequency of each number
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Convert to array and sort by frequency
    let sorted = Array.from(freqMap.entries())
        .sort((a, b) => b[1] - a[1]);

    // Pick top k
    return sorted.slice(0, k).map(entry => entry[0]);
}

// Test cases
console.log(topKFrequent([1,1,1,2,2,3], 2)); // [1,2]
console.log(topKFrequent([1], 1));           // [1]
console.log(topKFrequent([4,4,4,5,5,6,6,6,6], 2)); // [6,4]
