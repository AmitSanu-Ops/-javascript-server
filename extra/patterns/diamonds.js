function diamond(n){
  //let n=10;
  for(let i=1;i<=n;i++)
  {
      let star="";
      let k=1;
      for(let j=1;j<=(n*2-1);j++)
      {
          if(j>=n+1-i&&j<=n-1+i&&k)
          {
              star=star+"*";
              k=0;
          }
          else{
              star=star+" ";
              k=1;
          }
         
      }
      console.log(star);
     
  }
  for(let i=n;i>=1;i--)
  {
      let star="";
      let k=1;
      for(let j=1;j<=(n*2-1);j++)
      {
          if(j>=n+1-i&&j<=n-1+i&&k)
          {
              star=star+"*";
              k=0;
          }
          else{
              star=star+" ";
              k=1;
          }
         
      }
      console.log(star);
     
  }
}
diamond(5);