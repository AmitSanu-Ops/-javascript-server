import { NextFunction, Request, Response } from 'express';
//import UserSchema from 'src/repositories/user/UserSchema';
import UserRepository from '../../repositories/user/UserRepository';
import VersionableRepositry from '../../repositories/versionable/VersionableRepository'
import { Router } from 'express';
import {userModel} from '../../repositories/user/UserModel'
import * as bcrypt from "bcrypt";
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
  get = async(req, res, next) =>{
    try{
      console.log("Inside get method of Trainee Controller");
      let sort: any;
      let userRole: any;

      let trainee: any;

      if (req.query.sort === 'email') {
          sort = {email: -1 };
      }
      else if (req.query.sort === 'name') {
          sort = {name: -1 };
      }
      else
      sort = { createdAt: -1 };
      let search: any;
            if (req.query.searchBy !== undefined) {
                search = await this.userRepository.list1('trainee',sort, req.query.skip, req.query.limit, { name: {$regex: req.query.searchBy}});
                const list = await this.userRepository.list1( 'trainee',sort, req.query.skip, req.query.limit, { email: { $regex: req.query.searchBy.toLowerCase()}});
                trainee = { ...search, ...list};

            }
            else {
            // trainee = await this.userRepository.list1('trainee', sort, req.query.skip, req.query.limit, {});
             trainee =  await this.userRepository.list1( 'trainee',sort, req.query.skip, req.query.limit,{});
            }

            console.log(trainee,"hjahhhhhhhhhha");

 //const
        const traineeData = Object.values(trainee)
      await this.userRepository.getAll()

      .then((res1)=>{

        userModel.countDocuments({},function(err,Count_of_trainee){
          console.log("Count_of_trainee = ",Count_of_trainee)
          console.log('Response is', res1);
          res.status(200).send({
            message: "Trainees fetched successfully",
            //data: trainee,
            Totalcount : Count_of_trainee,
            count : traineeData.length,
            record: traineeData

          })
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

      this.userRepository.create({role: req.body.role, name:req.body.name, email:req.body.email, password: bcrypt.hashSync(req.body.password,10)})
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
////////////////////////////////////////////////////////////////////////////
// delete(req: Request, res: Response, next: NextFunction) {
//   try {
//       const userRepository = new UserRepository();
//       userRepository.delete(req.body);
//       res.status(200).send({
//           message: 'trainee deleted successfully',
//           data: [
//               {
//                   'action': `data has deleted with id -> ${req.body.originalId}`
//               }
//           ],
//           status: 'success',
//       });
//   } catch (err) {
//       console.log('error is ', err);
//   }
// }
/////////////////////////////////////////////////////////////////////////////////////
public delete = (req, res, next) => {
  try {
      const id = req.query.id;
      const userData = userModel.findOne({ originalId: id })
      userModel.findOne({ originalId: id })
      console.log(id, "  Value of ID")
      const remover = id;
      console.log(remover, " remover")
      const user = new UserRepository();
      user.delete(id, remover)
          .then((result) => {
              res.send({
                  status: 'OK',
                  message: 'Deleted successfully', result,
                  code: 200,
                  data: result
              });
          })
  }
  catch (err) {
      res.send({
          message: 'User not found to be deleted',
          code: 404
      });
  };
}
}
export default new TraineeController()
