//let n=process.argv[2];
export default function triangle(n){
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
}
//triangle(6);