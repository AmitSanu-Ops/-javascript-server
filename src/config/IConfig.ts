// // server/config.ts
// import config from './configuration';

// interface Config {
//   /** Whether assets should be cached or not. */
//   cache: boolean;

//   /** The port that the express server should bind to. */
//   port: string;
// }

// // const config: Config = {
// //   cache: nodeConfig.get<boolean>('cache'),
// //   port: nodeConfig.get<string>('port')
// // };

// export default Config;
interface IConfig {
  PORT: number;
  NODE_ENV: string;
}
export { IConfig };
