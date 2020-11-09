import * as mongoose from 'mongoose';

export default class VersionableSchema extends mongoose.Schema {

  constructor(options: any, collections: any) {
    const versionedOptions = Object.assign({
      createdAt: {
        default: Date.now,
        type: Date,
      },
      deletedAt: {
       // default: Date.now,
        required: false,
        type: Date,
      },
      originalId: {
        required: true,
        type: String,
      }}, options);
      super(versionedOptions, options);
    }
  }
