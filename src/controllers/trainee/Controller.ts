import { NextFunction, Request, Response } from 'express';
//import UserSchema from 'src/repositories/user/UserSchema';
import UserRepository from '../../repositories/user/UserRepository';
import VersionableRepositry from '../../repositories/versionable/VersionableRepository'
import { Router } from 'express';
import {userModel} from '../../repositories/user/UserModel'
class TraineeController {

  constructor(){
    this.get = this.get.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    //this.delete = this.delete.bind(this);
  }

  userRepository: UserRepository = new UserRepository()
  //instance:
  static instance: TraineeController;

  static getInstance() {
    if(TraineeController.instance) {
      return TraineeController.instance
    }

    TraineeController.instance = new TraineeController();
    return TraineeController.instance;
  }
  get = (req, res, next) =>{
    try{
      console.log("Inside get method of Trainee Controller");
      this.userRepository.find({},{}, {})
      .then((res1)=>{
        console.log('Response is', res1);
        res.status(200).send({
          message: "Trainees fetched successfully",
          data: res1
        })
      })

     // VersionableRep`ositry.prototype.create()

    } catch(err) {
      console.log("Inside err", err);
      next({
        error: "Error Occured in fetching user",
        code: 500,
        message: err

      })
    }
  }

  create = (req, res, next) =>{
    try{
      console.log("Inside get method of Trainee Controller");

      this.userRepository.create({role: req.body.role, name:req.body.name})
      .then((res)=>{
        console.log('Response is', res);
      })


      res.send({
        message: "Trainees fetched AmitSanu successfully",
        data: [
          {
            name: "Trainee1",
            address: "Noida"
          }
        ]
      });
    }
     catch(err) {
      console.log("Inside err", err);
      next({
        error: "Error Occured in fetching user",
        code: 500,
        message: err

      })
    }
  }

  // update = (req, res, next) =>{
  //   try{
  //     console.log("Inside get method of Trainee Controller");
  //     const { id } = req.body;
  //     this.userRepository.findById(id)
  //     //this.update.name
  //     .then((res)=>{
  //       console.log('Response is', res);
  //     })


  //     res.send({
  //       message: "Trainees updated successfully",
  //       data: [
  //         {
  //           name: "Trainee1",
  //           address: "Noida"
  //         }
  //       ]
  //     });
  //   } catch(err) {
  //     console.log("Inside err", err);
  //     next({
  //       error: "Error Occured in fetching user",
  //       code: 500,
  //       message: err

  //     })
  //   }
  // }

//   public async update(req, res, next) {
//     const { id, dataToUpdate } = req.body;
//     const up = req.userData.id;
//     const user = new UserRepository();
//     await user.update( id , dataToUpdate, up)
//     .then((result) => {
//         res.send({
//             message: 'User Updated',
//             code: 200
//         });
//     })
//     .catch ((err) => {
//         res.send({
//             'err': err,
//             error: 'User Not Found for update',
//             code: 404
//         });
//     });
// }
update = (req, res, next) =>{
try {

  console.log("Inside update method");
  const{id,name, role, email, password}=req.body;
  userModel.findOne({ originalId:id },(err,result)=>{

  if(result!=null)
  {
  // console.log(result);
  this.userRepository.update({updatedAt:Date.now(),updatedBy:id,createdBy:id, name: name || result.name, role: role || result.role, email: email || result.email, password: password || result.password }, result.id)
  .then((data) => {
  console.log("Response is : ", data);
  res.status(200).send({ message: "successfully updated data", data: data });
  })
  }
  else
  {
  console.log("user does not exist ");
  res.status(400).send({ message: "user does not exist", data: result });
  }


  });
  }
  catch (err) {
  console.log("Inside error", err);
  }
}

delete(req: Request, res: Response, next: NextFunction) {
  try {
      const userRepository = new UserRepository();
      userRepository.delete(req.body);
      res.status(200).send({
          message: 'trainee deleted successfully',
          data: [
              {
                  'action': `data has deleted with id -> ${req.body.originalId}`
              }
          ],
          status: 'success',
      });
  } catch (err) {
      console.log('error is ', err);
  }
}
}
export default new TraineeController()
