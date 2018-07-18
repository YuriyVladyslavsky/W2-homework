function haha(n) {
  if(n >= 1) {
    console.log(n);
    haha(n - 1);
  }
}

let result = haha(10);
console.log(result);