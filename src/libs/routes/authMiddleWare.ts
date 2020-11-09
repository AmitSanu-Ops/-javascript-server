// import * as jwt from 'jsonwebtoken';
// import { hasPermission } from '../../libs/permissions';
// import { permissions } from '../../libs/constants';


// import IRequest from '../../IRequest';
// import { Response , NextFunction } from 'express';
// export default ( module: any , permissionType: string ) => ( req: IRequest, res: Response, next: NextFunction ) => {

//     try {
//     console.log( 'config is', module, permissionType );
//     const token = req.headers.authorization;
//     console.log( token );
//     const User = jwt.verify( token, 'qwertyuiopasdfghjklzxcvbnm123456' );
//     console.log( 'user', User.result );
//     req.userData = User.result;
//     console.log( User.result.role );
//     const result = hasPermission( module , User.result.role , permissionType );
//     console.log( 'result is', result );
//     if ( result === true )
//         next();
//     else {
//         next ( {
//             message: 'Unauthorised',
//             status: 403
//         } );
//     }
//     }
//     catch ( err ) {
//         next ( {
//             message: err
//         } );
//     }
// };
import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { userModel } from "../../repositories/user/UserModel";
import * as bcrypt from "bcrypt";

export default () => (req: Request, res: Response, next: NextFunction) => {

  try {
    console.log("adaJkjnJKW0",req.body)

    const { email, password } = req.body;
    userModel.findOne({ email: email }, (err, result) => {
      if (result) {
        if (password === result.password) {
          result.password = bcrypt.hashSync(result.password, 10);
          const token = jwt.sign({ result }, 'qwertyuiopasdfghjklzxcvbnm123456');
          console.log(result);
          // console.log(token);
          res.send({
            data: token,
            message: 'Login successfully',
            status: 200
          });
        }
        else {
          res.send({
            message: 'Password Doesnt Match',
            status: 400
          });
        }
      }
      else {
        res.send({
          message: 'Email is not Registered',
          status: 404
        });
      }
    });
  }
  catch (err) {
    res.send(err);
  }
}
