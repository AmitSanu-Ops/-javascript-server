import { Router } from 'express';
import TraineeController from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import {authMiddlware} from '../../libs/routes';
const traineeRouter =  Router();
 traineeRouter.route('/')
      .get(authMiddlware('getUser','read'),validationHandler(validation.get),TraineeController.get)
     // .get(TraineeController.get)
      .post(authMiddlware('getUser','read'),validationHandler(validation.create),TraineeController.create)
      .put(authMiddlware('getUser','read'),TraineeController.update,validationHandler(validation.update))
      .delete(authMiddlware('getUser','read'),TraineeController.delete,validationHandler(validation.delete));

      //traineeRouter.delete('/trainee/:id', TraineeController.remove, validationHandler(validation.delete));
export default traineeRouter;
