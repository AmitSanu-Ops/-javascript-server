import * as mongoose from 'mongoose';
import { DocumentQuery, Query } from 'mongoose';

export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {

  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }

  private model: M;

  constructor(model){
    this.model = model;

  }

  public async create(options: any): Promise<D>{
    const id = VersionableRepository.generateObjectId();
    const model = new this.model({
      ...options,
      _id: id,
      originalId: id
    });
    return await model.save();

  }

  public count(query: any): Query<number> {
    const finalQuery = { deletedAt: null, ...query};
    return this.model.countDocuments(finalQuery);
  }

  protected getAll(query: any, projection: any = {}, options: any = {}): DocumentQuery<D[], D>{
    const finalQuery = { deletedAt: null, ...query};
    return this.model.find(finalQuery, projection, options);
  }

  protected findOne(query: any): DocumentQuery<D, D> {
    const finalQuery = { deletedAt: null, ...query};
    return this.model.findOne(finalQuery);
  }

  protected find(query: any = {}, projection: any = {}, options: any = {}): DocumentQuery<D[], D> {
    const finalQuery = {deletedAt: null, ...query}
    return this.model.find(finalQuery, projection, options);
  }

  protected invalidate(id: string): DocumentQuery<D, D>{
    return this.model.update({ _id: id, deletedAt: null}, {deletedAt: Date.now}  )
  }

  protected async update(data: any): Promise<D> {
    console.log("Looking for previous valid document");
    const prev =  this.findOne({ originalId: data.originalId, deletedAt: null});
    console.log('Prev :', prev);

    if(prev) {
       this.invalidate(data.originalId);
    }else{
      return null;
    }
    console.log('Data :', data);
    const newData = Object.assign(JSON.parse(JSON.stringify(prev)), data);
    console.log('New Data :', newData);
    newData._id = VersionableRepository.generateObjectId();
    delete newData.deletedAt;

    const model = new this.model(newData);
    return model.save();

  }
}