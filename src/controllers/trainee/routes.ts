import { Router } from 'express';
import TraineeController from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import {authMiddlware} from '../../libs/routes';
const traineeRouter =  Router();
 traineeRouter.route('/')
      .get(validationHandler(validation.get),TraineeController.get)
     // .get(TraineeController.get)
      .post(validationHandler(validation.create),TraineeController.create)
      .put(TraineeController.update,validationHandler(validation.update))
      .delete(TraineeController.delete,validationHandler(validation.delete));

      //traineeRouter.delete('/trainee/:id', TraineeController.remove, validationHandler(validation.delete));
export default traineeRouter;
