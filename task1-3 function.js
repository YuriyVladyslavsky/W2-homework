const array = [2, 56, 3, 41, 0, 4, 100, 23];
const sum = array.reduce((sum, current) => current + sum);
const avg = sum / array.length;

console.log('Average number ' + avg);
