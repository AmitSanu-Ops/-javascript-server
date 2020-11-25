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
/**
 * @swagger
 *
 *  definitions:
 *      Login:
 *        type: object
 *        properties:
 *          email:
 *              type: string
 *              example: trainee@successive.tech
 *          password:
 *              type: string
 *              example: training@123
 *      Token:
 *           type: object
 *           properties:
 *               status:
 *                   example: Ok
 *               message:
 *                   example: Success
 *               data:
 *                    example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5laGEuZ29lbEBzdWNjZXNzaXZlLnRlY2giLCJpZCI6IjVlNGEzNmJjNjQ4MjRiMWY4MGI3MzBjZCIsImlhdCI6MTU4MjU0OTIyN30.cFV6YYlfmhJ1yL3GyIIgb-PjMTpDNVICd5KGi1ENpVI
 */

 /**
 * @swagger
 *
 * /api/user/me:
 *   get:
 *     description: Current user Details.
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: success
 *         schema:
 *             $ref: '#/definitions/me'
 */

userRouter.route('/me')
.get(authMiddlware ( permissions.getUser, 'read' ),userController.me,validationHandler(validation.get));

/**
 * @swagger
 *
 * /api/user/login:
 *   post:
 *     description: Login Credentials
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: User email and password
 *         in: body
 *         required: true
 *         type: object
 *         schema:
 *             $ref: '#/definitions/Login'
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *              $ref: '#/definitions/Token'
 *       422:
 *         description: invalid email or password
 *         schema:
 *          oneOf:
 *          properties:
 *              status:
 *                  example: "200"
 *              message:
 *                  example: Password does not match
 *              err:
 *                  example: Password is incorrect
 */




userRouter.route('/login')
.post(userController.login,authMiddlware('getUser','read'), validationHandler ( config.login ) );

export default userRouter;
