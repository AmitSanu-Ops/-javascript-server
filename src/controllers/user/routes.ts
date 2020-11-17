import { Router } from 'express';
import userController from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import {authMiddlware} from '../../libs/routes';
const userRouter =  Router();
userRouter.route('/')
      .get(validationHandler(validation.get),userController.get)
     // .get(userController.get)
      .post(validationHandler(validation.get),userController.create)
      .put(validationHandler(validation.get),userController.update)
      .delete(validationHandler(validation.get),userController.delete);
export default userRouter;
