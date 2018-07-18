function haha(n) {
  if(n >= 1) {
    console.log(n);
    haha(n - 1);
  }
}

haha(10);
