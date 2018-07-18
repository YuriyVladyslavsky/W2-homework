function getMaxOfArray(numbers) {
  return Math.max.apply(Math, numbers);
}

function getMinOfArray(numbers) {
  return Math.min.apply(Math, numbers);
}

let arr = [24, 3, 57, 84, 77];
console.log('Max number is: ' + getMaxOfArray(arr) + '\nMin number is: ' + getMinOfArray(arr));