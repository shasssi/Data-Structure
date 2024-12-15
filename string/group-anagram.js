/*
    @@ Leetcode - 49
    Group Anagrams 
    @@ output can be in any order

    arr: ["eat", "tea", "tan", "ate", "nat", "bat"]
    @@ returns [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

    - string sort approach: m*nlog(n), m: length of array, nlog(n): sorting
    - hash map approach: O(m*n), m: length of array, n: length of string element
*/

// Time: O(m*n), Space: O(n)
const hashMapApproach = (arr) => {
  // hash map - key: char count(a to z), value: [string, ...]
  // key eg - "eat": 1-e, 1-a, 1-t
  // arr of length 26, each index represent char, 0 -a, 1-b, 2-c,...., 25-z
  // hash map for "eat" - {"1,,,,1,,,,,,,,,,,,,,1": ["eat"]}
  // hash map for "tan" - {"1,,,,,,,,,,,,1,,,,,,1": ["tan"]}
  const map = {};
  for (let i in arr) {
    const str = arr[i];
    const key = [];
    for (let j in str) {
      // ascii of char a
      const a = "a".charCodeAt();
      // ascii of char in string
      const char = str[j].charCodeAt();
      // update the key for char at correct index(by subtracting current ascii with a ascii) 
      if (key[char - a]) {
        key[char - a] += 1;
      } else {
        key[char - a] = 1;
      }
    }
    // update the hash map with key & value
    if (map[key]) {
      map[key] = [...map[key], str];
    } else {
      map[key] = [str];
    }
  }
  // final output: return all values of hash map
  return Object.values(map);
};

console.log(hashMapApproach(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(hashMapApproach(["eet", "tea", "tan", "ate", "nat", "tee", "ete"]));
