import * as express from 'express';
import * as bodyParser from 'body-parser';
import {notFoundHandler, errorHandler,} from './libs/routes'
import  mainRouter from './router';
//import routes from './router'
import Database from './libs/Database';

//console.log(bodyParser);
class Server {
  app;
  constructor(private config) {
      this.app = express();

    }
  bootstrap() {
    this.setupRoutes();
    this.initBodyParser();
    return this;
  }
  public setupRoutes() {
    const {app} = this;
    this.app.use('/',(req, res, next)=>{
      console.log("Inside first middleware");
      next()
    })

    app.get('/health-check', (req, res, next) => {
      console.log("Inside second middleware");
      res.send('I am Ok');
    });
    //return this;
    this.app.use('/api', mainRouter);

    this.app.use(notFoundHandler);


    this.app.use(errorHandler);

  }

  public initBodyParser(){
    this.app.use(bodyParser.json({ type: 'application/*+json' }));
  }

    public run() {
    const {app, config: {PORT,MONGO_URL}} = this;

    Database.open(MONGO_URL)
    .then((res) => {
      console.log("Successfully connected to Mongo")
      app.listen(PORT, (err) => {
        if (err) {
        console.log(err);
        }
        console.log(`App is running,${PORT}`);
    });
  })
      .catch(err => Database.disconnect());
  }
  }
  export default Server;

