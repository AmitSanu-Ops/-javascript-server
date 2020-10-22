function map(f, a) 
{
    let result = []; 
    let i; 
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
    return result;
  }
  const f = function(x) {
     return x * x * x; 
  }
  let numbers = [0, 1, 2, 5, 11];
  let cube = map(f,numbers);
  console.log(cube);