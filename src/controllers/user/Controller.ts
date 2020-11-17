import { Request, Response, NextFunction } from 'express';
import { userModel } from '../../repositories/user/UserModel';
import * as jwt from 'jsonwebtoken';
import  * as bcrypt from 'bcrypt';
//import config from '../trainee/validation';
import config from '../../config/configuration';

class userController {
  instance: userController
  static instance: any;

  static getInstance() {
    if(userController.instance) {
      return userController.instance
    }


    userController.instance = new userController();
    return userController.instance;
  }

  get(req, res, next) {
    try{
      console.log("Inside get method of User Controller");

      res.send({
        message: "Users fetched successfully",
        data: [
          {
            name: "User1",
            address: "Noida"
          }
        ]
      });
    } catch(err) {
      console.log("Inside err", err);
      next({
        error: "Error Occured in fetching user",
        code: 500,
        message: err
      })
    }
  }

  create(req, res, next) {
    try{
      console.log("Inside post method of user Controller");

      res.send({
        message: "user created successfully",
        data: [
          {
            name: "user1",
            address: "Noida"
          }
        ]
      });
    } catch(err) {
      console.log("Inside err", err);
    }
  }

  update(req, res, next) {
    try{
      console.log("Inside update method of user Controller");

      res.send({
        message: "users updated successfully",
        data: [
          {
            name: "user1",
            address: "Noida"
          }
        ]
      });
    } catch(err) {
      console.log("Inside err", err);
    }
  };

  delete(req , res , next) {
    try{
      console.log("Inside delete method of user Controller");

      res.send({
        message: "user deleted successfully",
        data: [
          {
            name: "user1",
            address: "Noida"
          }
        ]
      });
    } catch(err) {
      console.log("Inside err", err);
    }
  }


  login( req: Request, res: Response, next: NextFunction ) {
    try {
       const { email , password } = req.body;
      console.log(email)
    userModel.findOne ( { email: email }, ( err, result ) => {
        if ( result ) {
            if ( bcrypt.compareSync(password,result.password)) {
                console.log ( 'result is' , result.id );
                // const token = jwt.sign ( {
                //     result
                // }, 'qwertyuiopasdfghjklzxcvbnm123456' );
                const token = jwt.sign({result}, config.secretKey);
            console.log( token );
            res.send({
                data: token,
                message: 'Login Permited',
                status: 200
            } );
            }
            else {
                res.send ( {
                    message: 'id Doesnt Match',
                    status: 400
                } );
            }
        }
        else {
                    res.send ( {
                        message: 'Email is not Registered',
                        status:   404
                    } );
        }
    } ) ;
}
    catch ( err ) {
        res.send( err );
    }
}

me( req: Request, res: Response, next: NextFunction ) {
    //const data = req.userdata;
   res.json ( {
      //  data
   } );
}
}


export default  new userController()
