import * as mongoose from 'mongoose';

export default class VersionableSchema extends mongoose.Schema {

  constructor(schema, options) {
    const baseSchema = {
      createdAt: {
        default: Date.now,
        type: Date,
      },
      createdBy: String,
      updatedAt:Date,
      updatedBy: String,
      deletedAt:Date,
      deletedBy:String,

      // deletedAt: {
      //   //default: Date.now,
      //   required: false,
      //   type: Date,
      // },
      originalId: {
        required: true,
        type: String,
      }
    }
      super({...schema, ...baseSchema}, options);
    }
  }
