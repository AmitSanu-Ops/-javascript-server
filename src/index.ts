import Server from './Server';
import config from './config/configuration';
console.log("config is",config)
const server = new Server(
{
  port : 9000

});

server.bootstrap().run()