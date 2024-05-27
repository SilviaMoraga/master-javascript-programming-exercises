function joinArrays(arr1, arr2) {
  let arr = arr1.concat(arr2)
  return arr
}

let output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]
