import { json } from 'express';
import config1 from '../controllers/trainee/validation';


let a=Object.keys(config1.get);
export default function(config){
  return function (req, res, next){
    console.log(req.query, "output11");

    let {skip, limit} = req && req.query;


    // let a = 2;
    //console.log(req[a]);

           // console.log(Object.keys(a[0].includes('number')));

            // if(a.includes('skip'))
            // {
            //     console.log("cfv ");
            // }

            //const reqQuery = JSON.parse(req.query)
           // console.log(reqQuery)
            //const {skip, limit} = req.query
          //  console.log('body is', req[obj.in]);
          //   console.log('body', Object.keys( req[obj.in] ).length );


             let b = parseInt(skip) || 0;
             let b1 = parseInt(limit) || 0;

             console.log(b,b1, '22222')
             //let b1=typeof(req.query);

             for(let i=0;i<a.length;i++)
             {
              console.log(a[i]);
                 if(a[i]==='skip')
                {
                     if(b)
                    {
                      console.log(b,"this is number");

                    }
                    else
                    {
                      next(errors[0]);
                      //console.log(errors);

                    }
                }
                else if(a[i]==='limit')
                {
                    if(b1)
                    {
                      console.log(b1, "this is number");
                    }
                    else
                    {
                      next(errors[1]);
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
