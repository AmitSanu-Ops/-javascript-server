import { Request, Response, NextFunction } from 'express';
interface IRequest extends Request{
  params:any,
  query:any,
  body:any,
  user : any

}

export default IRequest;
