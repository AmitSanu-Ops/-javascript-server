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
//export default userRouter;

// const userRouter = express.Router();

// userRouter.route('/')
// .get( userController.get)
// .post(  userController.create)
// .put(  userController.update)
// .delete(  userController.delete);

userRouter.route('/me')
.get(authMiddlware ( permissions.getUser, 'read' ),  userController.me);

userRouter.route('/login')
.post(userController.login,authMiddlware('getUser','read'), validationHandler ( config.login ) );

export default userRouter;

// import { Router } from "express";
// import UserController from "./Controller";
// import validationHandler from "../../libs/validationHandler";
// import Validation from "./Validation";
// import authMiddleWare from "../../libs/routes/authMiddleWare";

// const userRouter=Router();
// userRouter.route('/login')
// .post(authMiddleWare(),validationHandler(Validation.create),UserController.create)

// export default userRouter;
