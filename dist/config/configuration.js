"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
console.log(dotenv);
// const envVars = dotenv()
// import Config from ./IConfig
// const config : Config= {
//   cache: nodeConfig.get<boolean>('cache'),
//   port: nodeConfig.get<string>('port')
// }
const envVars = require('dotenv').config();
console.log('Inside config', envVars);
const config = envVars.parsed;
Object.freeze(config);
// config.PORT= 7000;
exports.default = config;
//# sourceMappingURL=configuration.js.map