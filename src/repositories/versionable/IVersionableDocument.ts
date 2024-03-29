import * as mongoose from 'mongoose';

export default interface IVersionableDocument extends mongoose.Document {

  deletedAt: Date;
  originalId: String;
  createdAt: Date;
}
