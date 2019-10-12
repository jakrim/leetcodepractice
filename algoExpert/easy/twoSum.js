// Leetcode 1: Two Sum

// using maps
const twoNumberSum = (array, target) => {
  const map = new Map();

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const diff = target - element;
    if (map.has(diff)) {
      return diff > map.get(diff)
        ? [map.get(diff), diff]
        : [diff, map.get(diff)];
    }
    map.set(element, diff);
  }

  return [];
};

// using two pointers
const twoNumberSum = (array, target) => {
  // sort the arr
  const sorted = array.sort((a, b) => a - b);

  // set a left and right pointer
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[left] + array[right] === target) {
      return [array[left], array[right]];
    } else if (array[left] + array[right] < target) {
      left++;
    } else if (array[left] + array[right] > target) {
      right--;
    }
  }
  return [];
};

const actual = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);

const one = twoNumberSum([4, 6], 10);

console.log('actual', actual);
console.log('one', one);
