import * as mongoose from 'mongoose';
import seedData from './seedData';
//console.log(mongoose);
class Database {
  static open (mongoURL) {
    return new Promise((resolve, reject) => {


    console.log('Inside open method');
    mongoose.connect(mongoURL, { useNewUrlParser:true, useUnifiedTopology:true}, (err) => {
      if(err) {
        console.log(err);
        reject(err);
        return;
      }
      seedData();
      //console.log("Successfully connected to Mongo");
      resolve(null);
    })

  });
}
  static disconnect()
  {
    mongoose.disconnect();
    console.log("inside disconnect");
  }
}
export default Database;
