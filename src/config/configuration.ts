import * as dotenv from 'dotenv';
console.log(dotenv);
import { IConfig } from './IConfig';
// const envVars = dotenv()
// import Config from ./IConfig
// const config : Config= {
//   cache: nodeConfig.get<boolean>('cache'),
//   port: nodeConfig.get<string>('port')
// }
const envVars = require('dotenv').config();
console.log('Inside config', envVars);
const config: IConfig = envVars.parsed;

Object.freeze(config);
// config.PORT= 7000;
export default config;

