"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./libs/routes");
const router_1 = require("./router");
console.log(bodyParser);
class Server {
    constructor(config) {
        this.config = config;
        this.app = express();
    }
    bootstrap() {
        this.setupRoutes();
        this.initBodyParser();
        return this;
    }
    setupRoutes() {
        const { app } = this;
        this.app.use('/', (req, res, next) => {
            console.log("Inside first middleware");
            next();
        });
        app.get('/health-check', (req, res, next) => {
            console.log("Inside second middleware");
            res.send('I am Ok');
        });
        //return this;
        this.app.use('/api', router_1.default);
        this.app.use(routes_1.notFoundHandler);
        this.app.use(routes_1.errorHandler);
    }
    initBodyParser() {
        this.app.use(bodyParser.json({ type: 'application/*+json' }));
    }
    run() {
        const { app, config: { port } } = this;
        app.listen(port, (err) => {
            if (err) {
                console.log(err);
            }
            console.log(`App is running,${port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map