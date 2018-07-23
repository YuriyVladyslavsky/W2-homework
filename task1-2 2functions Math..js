const minMaxOfArray = arrayNumbers => ({
max: Math.max(...arrayNumbers),
min: Math.min(...arrayNumbers),
});

console.log(minMaxOfArray([32, 45, 97, 13, 29]));
