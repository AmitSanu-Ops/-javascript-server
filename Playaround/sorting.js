let arr = [6,2,4,10,3,1,7];
//let arr = ['d','a','c','b','e'];

let sorting = function(arr)
{
  flag = true;
  while(flag){
    flag = false;  
    for(let i=0;i<arr.length;i++)
    {
      if(arr[i] > arr[i+1])
      {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;                  
        flag = true;
      }

    }
  }
  return arr;
}
console.log(sorting(arr));