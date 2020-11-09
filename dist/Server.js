"use strict";
// import * as express from 'express';
// import * as bodyParser from 'body-parser';
// import {notFoundHandler, errorHandler,} from './libs/routes'
// import  mainRouter from './router';
// //import routes from './router'
// import Database from './libs/Database';
Object.defineProperty(exports, "__esModule", { value: true });
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
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./libs/routes");
const router_1 = require("./router");
const Database_1 = require("./libs/Database");
class Server {
    constructor(config) {
        this.config = config;
        this.config = config;
        this.app = express();
    }
    bootstrap() {
        this.initBodyParser();
        this.setupRouts();
        return this;
    }
    setupRouts() {
        const { app } = this;
        app.use((req, res, next) => {
            console.log('Inside First MidleWare');
            next();
        });
        app.use('/health-check', (req, res, next) => {
            console.log('Inside Second MidleWare');
            res.send('I am OKK');
        });
        this.app.use('/api', router_1.default);
        app.use('/health-check', (req, res) => {
            console.log('Inside Second MidleWare');
            res.send('I am fine');
        });
        app.use(routes_1.notFoundHandler);
        app.use(routes_1.errorHandler);
        return this;
    }
    initBodyParser() {
        this.app.use(bodyParser.json());
    }
    run() {
        const { app, config: { PORT, MONGO_URL } } = this;
        Database_1.default.open(MONGO_URL)
            .then((res) => {
            console.log("Successfully connected to Mongo");
            this.app.listen(PORT, () => {
                console.log(`App is running on port ${PORT}`);
            });
        })
            .catch(err => { console.log(err); });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map