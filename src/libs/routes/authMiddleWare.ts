import * as jwt from 'jsonwebtoken';
import { hasPermission } from '../../libs/permissions'
import { permissions } from '../../libs/constants';


export default (module, permissionType) => (req, res, next) => {
  try {

    console.log("The config is", module, permissionType);
    console.log("Header is", req.headers['authorization'])

    const token = req.headers['authorization']
    const decoderUser = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456')
    console.log('User', decoderUser);


    //let a = decoderUser.role;
    //console.log(a);
    //console.log("hjxbhxhs");
    // console.log(hasPermission('getUser', 'Head-trainer', "read"));
    let a = hasPermission(permissions.getUsers, decoderUser.role, permissionType);
    console.log(decoderUser.role,"having",permissionType,"permission is",a);
    next();

  }
  catch (err) {
    //console.log(err);
    next({
      error: "Unathorized",
      code: 403
    })
  }
}
