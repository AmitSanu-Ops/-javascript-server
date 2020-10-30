import config1 from '../controllers/trainee/validation';


let a=Object.keys(config1.get);
export default function(config){
  return function (req, res, next){
    console.log("Config",config);
    console.log(req.query);
    //console.log(req.body);
   // console.log(Object.keys(config1.get));
    //const obj = Object.fromEntries(keys);
    //console.log(keys)

    // let a = 2;
    //console.log(req[a]);

            console.log(Object.keys(a[0].includes('number')));

            // if(a.includes('skip'))
            // {
            //     console.log("cfv ");
            // }

            let b=typeof(JSON.parse(req.query.skip));
            let b1=typeof(JSON.parse(req.query.limit));
            // console.log(b);
            for(let i=0;i<a.length;i++)
            {
                if(a[i]=='skip')
                {
                    if((b)=='number')
                    {
                        console.log("true");
                    }
                    else
                    {
                        next(errors);
                    }
                }
                else if(a[i]=='limit')
                {
                    if((b1)=='number')
                    {
                        console.log("true");
                    }
                    else
                    {
                        next(errors);
                    }
                }
            }

            // console.log(req.body);

        }
    }


 const errors = [

  {

  key: "skip",

  location: "query",

  errorMessage: "Skip is invalid"

  },

  {

  key: "limit",

  location: "query",

  errorMessage: "Limit is invalid"

  }

  ]
