import { NextFunction, Request, Response } from 'express';
//import UserSchema from 'src/repositories/user/UserSchema';
import UserRepository from '../../repositories/user/UserRepository';
import VersionableRepositry from '../../repositories/versionable/VersionableRepository'
import { Router } from 'express';
class TraineeController {

  constructor(){
    this.get = this.get.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
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


  update = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const { id, dataToUpdate } = req.body;
      const user = await this.userRepository.update(dataToUpdate)
      //return SystemResponse.success(res, user, 'Updated user');

    }
    catch (err) {
      return next({ error: err, message: err });
    }
  };


    delete = (req, res, next)=>{
    try{
      console.log("Inside get method of Trainee Controller");

      const { id } = req.body.id;
      this.userRepository.findById(id)
      .then((res)=>{
        this.userRepository.delete(id)
        console.log('Response is', res);
      })



      res.send({
        message: "Trainees fetched successfully",
        data: [
          {
            name: "Trainee1",
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
}
export default new TraineeController()
