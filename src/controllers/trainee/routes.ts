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
      .put(validationHandler(validation.update),TraineeController.update)
      .delete(validationHandler(validation.delete),TraineeController.delete);

      //traineeRouter.delete('/trainee/:id', validationHandler(validation.delete), TraineeController.delete);
export default traineeRouter;
