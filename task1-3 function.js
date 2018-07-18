let numbers = [34, 88 ,3 , 22, 17];

function average(numbers) { 

        sum = 0, 
        len = numbers.length; 
    for (let i = 0; i < len; i++) { 
        sum += numbers[i]; 
    } 
  
    return sum / len;
}

console.log('Average number is: ' + average(numbers));