let n;
function factorial(n)
 {
    if (n < 0) 
    console.log('Error! Factorial for negative number does not exist.');
    else if((n == 0) || (n == 1))
      return 1;
    else
      return(n*factorial(n - 1));
  }
console.log(factorial(-1))

