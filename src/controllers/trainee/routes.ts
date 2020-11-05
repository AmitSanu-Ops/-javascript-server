import { Router } from 'express';
import TraineeController from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
const traineeRouter =  Router();
traineeRouter.route('/')
      .get(validationHandler(validation.get),TraineeController.get)
     // .get(TraineeController.get)
      .post(TraineeController.create)
      .put(TraineeController.update)
      .delete(TraineeController.delete);
export default traineeRouter;
