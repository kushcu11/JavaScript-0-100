function lengthOfLongestSubstring(s) {
    let map = new Map();
    let left = 0, maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right]) && map.get(s[right]) >= left) {
            left = map.get(s[right]) + 1; // move left pointer
        }
        map.set(s[right], right); // update last seen index
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb"));    // 1
console.log(lengthOfLongestSubstring("pwwkew"));   // 3
