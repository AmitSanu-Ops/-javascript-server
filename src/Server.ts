// import * as express from 'express';
// import * as bodyParser from 'body-parser';
// import {notFoundHandler, errorHandler,} from './libs/routes'
// import  mainRouter from './router';
// //import routes from './router'
// import Database from './libs/Database';

// //console.log(bodyParser);
// class Server {
//   app;
//   constructor(private config) {
//       this.app = express();

//     }
//   bootstrap() {
//     this.setupRoutes();
//     this.initBodyParser();
//     return this;
//   }
//   public setupRoutes() {
//     const {app} = this;
//     this.app.use('/',(req, res, next)=>{
//       console.log("Inside first middleware");
//       next()
//     })

//     app.get('/health-check', (req, res, next) => {
//       console.log("Inside second middleware");
//       res.send('I am Ok');
//     });
//     //return this;
//     this.app.use('/api', mainRouter);

//     this.app.use(notFoundHandler);


//     this.app.use(errorHandler);

//   }

//   public initBodyParser(){
//     this.app.use(bodyParser.json());
//   }

//     public run() {
//     const {app, config: {PORT,MONGO_URL}} = this;

//     Database.open(MONGO_URL)
//     .then((res) => {
//       console.log("Successfully connected to Mongo")
//       app.listen(PORT, (err) => {
//         if (err) {
//         console.log(err);
//         }
//         console.log(`App is running,${PORT}`);
//     });
//   })
//       .catch(err => Database.disconnect());
//   }
//   }
//   export default Server;

import * as express from "express";
import { Request, Response, NextFunction } from "express";
import * as bodyParser from "body-parser";
import { notFoundHandler, errorHandler } from './libs/routes';
import {IConfig} from "./config/IConfig";
import mainRouter from "./router";
import Database from "./libs/Database";

class Server {
app:express.Express
constructor(private config:IConfig) {
this.config=config;
this.app = express();
}

bootstrap() {
this.initBodyParser();
this.setupRouts();
return this;
}

setupRouts() {
const { app } = this;
app.use((req:Request,res:Response,next:NextFunction) => {
console.log('Inside First MidleWare');
next();
});

app.use('/health-check', (req:Request,res:Response,next:NextFunction) => {
console.log('Inside Second MidleWare');
res.send('I am OKK');

});

this.app.use('/api',mainRouter);
app.use('/health-check', (req:Request, res:Response) => {
console.log('Inside Second MidleWare');
res.send('I am fine');
});

app.use(notFoundHandler);
app.use(errorHandler);

return this;
}

initBodyParser() {
this.app.use(bodyParser.json());
}


public run() {

const {app,config:{ PORT, MONGO_URL}} = this;
Database.open(MONGO_URL)
.then((res)=>{
console.log("Successfully connected to Mongo");
this.app.listen(PORT,() =>
{
console.log(`App is running on port ${PORT}`);
});
})
.catch(err=>{console.log(err)});
}
}

export default Server;
