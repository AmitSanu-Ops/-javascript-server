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
    delete options._id;
    const model = new this.model({
      _id: id,
      originalId: id,
      createdBy: options.id,
      ...options,
    });
    return await model.save();

  }

  public count(query: any): Query<number> {
    const finalQuery = { deletedAt: null, ...query};
    return this.model.countDocuments(finalQuery);
  }

  public async getUser(data: any){
    return await this.model.findOne(data);
  }

  public getAll(query: any = {}, projection: any = {}, options: any = {}): DocumentQuery<D[], D>{
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

  // protected invalidate(id: any): DocumentQuery<D, D>{
  //   return this.model.update({ originalId: id, deletedAt: null}, {}  )
  // }

  protected invalidate(id): DocumentQuery<D, D> {
    const query: any = { originalId: id, deletedAt: { $exists: false } };
    const data: any = { deletedAt: Date.now() };
    return this.model.updateOne(query, data);
}

  public async update(data:any, id:string):Promise<D>{
    // console.log("Looking for privious valid document ");
    let originalData;
    const prev=await this.findOne({originalId:id,deletedAt:null,deletedBy:null})
    // console.log("Prev : ",prev);
    // console.log("Data : ",data);
    originalData=prev;
    this.updateOne(originalData);
    const newData=Object.assign(JSON.parse(JSON.stringify(originalData)),data);
    // console.log("newData : ",newData);
    newData._id=VersionableRepository.generateObjectId();
    delete newData.deletedAt;
    const model=new this.model(newData);
    return model.save();
    }

    public async updateOne(originalData:any){

    const oldId=originalData._id;
    const oldModel={
    ...originalData,
    deletedBy:oldId,
    deletedAt:Date.now(),
    };
    this.model.updateOne({originalId:oldId},oldModel)
    .then((res)=>{
    if(res===null)
    {
    throw 'Error';
    }
    })
    .catch((err)=>{console.log("errror is : ",err)});
    }

///////////////////////////////////////////////////////////////////
public async delete(id: string, remover: string) {

  let originalData;

  const data = await this.findOne({ _id: id, deletedAt: null })
      if(data) {
          if (data === null) {
              throw '';
          }

          originalData = data;
          const oldId = originalData._id;

          const modelDelete = {
              ...originalData,
              deletedAt: Date.now(),
              deletedBy: remover,
          };

          this.model.updateOne({ _id: oldId }, modelDelete)
              .then((res) => {
                  if (res === null) {
                      throw '';
                  }
              });

      };
}
////////////////////////////////////////////////////////////////////////
// public async delete(id: any): Promise<D> {
//   console.log(id.originalId);
//   const prev = await this.findOne({ originalId: id.originalId, deletedAt: undefined, deletedBy: undefined });
//   if (prev) {
//       return await this.invalidate(id.originalId);
//   }
//   else {
//       return undefined;
//   }
// }

public async list(userRole, sort, skip, limit, searchBy): Promise<D[]> {
  return this.model.find({role:userRole, deletedAt: undefined, ...searchBy}).sort(sort).skip(Number(skip)).limit(Number(limit));
}


}
