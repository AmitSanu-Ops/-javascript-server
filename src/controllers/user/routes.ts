import * as express from 'express';
import { Router } from 'express';
import  userController from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import {authMiddlware} from '../../libs/routes';
import { permissions } from '../../libs/constants';
import config from './validation';
const userRouter =  Router();
userRouter.route('/')
      .get(authMiddlware('getUser','read'),validationHandler(validation.get), userController.get)
     // .get(userController.get)
      .post(authMiddlware('getUser','read'),validationHandler(validation.get),userController.create)
      .put(authMiddlware('getUser','read'),validationHandler(validation.get),userController.update)
      .delete(authMiddlware('getUser','read'),validationHandler(validation.get),userController.delete);


userRouter.route('/me')
.get(authMiddlware ( permissions.getUser, 'read' ),userController.me,validationHandler(validation.get));

userRouter.route('/login')
.post(userController.login,authMiddlware('getUser','read'), validationHandler ( config.login ) );

export default userRouter;
