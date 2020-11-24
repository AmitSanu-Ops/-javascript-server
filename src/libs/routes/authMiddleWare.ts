//import { Console } from 'console';
import * as jwt from 'jsonwebtoken';
import {hasPermission} from "../../libs/permissions";
import {permissions} from '../../libs/constants';
import { error } from 'console';

export default (module, permissionType) => (req, res, next) => {
  try {
    console.log("The config is", module, permissionType);

    console.log("Header is", req.headers['authorization'])
    const token = req.headers['authorization']

    const decoderUser = jwt.verify(token, 'MyhkoyENQ9QwIv3eoAJagvYOQnV5xgDb');

    console.log('User', decoderUser);
    if(hasPermission(permissions.getUser,decoderUser.role,permissionType))
    {
      console.log(`${decoderUser.role} has permission ${permissionType} : true`);
      next();
    }
    else
    {
      throw error;
    }
  } catch(err) {
    next({
      error: "Unauthorised",
      code: 403

    })
  }
}
