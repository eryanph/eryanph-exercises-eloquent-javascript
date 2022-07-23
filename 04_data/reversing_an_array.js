/**
 * https://eloquentjavascript.net/04_data.html#i_6xTmjj4Rf5
 * 
 * Reversing an array
 * Arrays have a reverse method that changes the array by inverting the order in which its elements
 * appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first,
 * reverseArray, takes an array as argument and produces a new array that has the same elements in
 * the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies
 * the array given as argument by reversing its elements. Neither may use the standard reverse method.
 */

const reverseArray = (arr) => {
  const reverseArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }

  return reverseArr;
};

const reverseArrayInPlace = (arr) => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
};

console.log(reverseArray(["A", "B", "C"]));
const arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
