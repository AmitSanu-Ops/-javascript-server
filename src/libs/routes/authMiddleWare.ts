//import { Console } from 'console';
import * as jwt from 'jsonwebtoken';
import {hasPermission} from "../../libs/permissions";
import {permissions} from '../../libs/constants';
import { error } from 'console';
import IRequest from "../../libs/IRequest"
import { Request, Response, NextFunction } from 'express';

export default (module, permissionType) => (req:IRequest, res, next) => {
  try {
    console.log("The config is", module, permissionType);

    console.log("Header is", req.headers['authorization'])
    const token = req.headers['authorization']

    const decoderUser = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');

    console.log('User', decoderUser);
    req.user = decoderUser;
   // res.local.user = decoderUser;
    if(hasPermission(permissions.getUser,decoderUser.role,permissionType))
    {
      console.log(`${decoderUser.role} haspermission ${permissionType} : true`);
      console.log("Love...............")
      // return next();
      throw Error;
    }

    return next();
  }

  catch(err) {
    next({
      error: "Unauthorised",
      code: 403

    })
  }
}
