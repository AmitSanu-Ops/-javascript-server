import { Router } from 'express';
import TraineeController from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import {authMiddlware} from '../../libs/routes';
const traineeRouter =  Router();
traineeRouter.route('/')
      .get(authMiddlware('getUser','read'),validationHandler(validation.get),TraineeController.get)
     // .get(TraineeController.get)
      .post(authMiddlware('getUser','read'),validationHandler(validation.get),TraineeController.create)
      .put(authMiddlware('getUser','read'),validationHandler(validation.get),TraineeController.update)
      .delete(authMiddlware('getUser','read'),validationHandler(validation.get),TraineeController.delete);
export default traineeRouter;
