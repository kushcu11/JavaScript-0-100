//Valid Anagram

//Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

//An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    isAnagram(s, t) {
        if (s.length !== t.length){
            return false
        }
        const countS = {}
        const countT = {}
        for ( let i = 0; i<s.length; i ++){
            countS[s[i]]=(countS[s[i]]||0)+1;
            countT[t[i]] = (countT[t[i]] || 0) + 1;
        }
        for (const key in countS) {
            if (countS[key] !== countT[key]) {
                return false;
            }
        }
        return true;
    }
}
function testIsAnagram() {
    const sol = new Solution();

    const tests = [
        { s: "anagram", t: "nagaram", expected: true },
        { s: "rat", t: "car", expected: false },
        { s: "listen", t: "silent", expected: true },
        { s: "a", t: "a", expected: true },
        { s: "abc", t: "ab", expected: false },
        { s: "", t: "", expected: true }
    ];

    tests.forEach((test, index) => {
        const result = sol.isAnagram(test.s, test.t);
        console.log(
            `Test ${index + 1}:`,
            result === test.expected ? "✅ Passed" : `❌ Failed (got ${result}, expected ${test.expected})`
        );
    });
}

testIsAnagram();
