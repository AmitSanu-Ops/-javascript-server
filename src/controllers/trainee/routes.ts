import { Router } from 'express';
import TraineeController from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import {authMiddlware} from '../../libs/routes';
const traineeRouter =  Router();

/**
 * @swagger
 *
 *  definitions:
 *      TraineePost:
 *        type: object
 *        properties:
 *          email:
 *              type: string
 *              example: amit.sanu@successive.tech
 *          name:
 *              type: string
 *              example: amitSanu
 *          password:
 *              type: string
 *              example: trainee@123
 *          role:
 *               type: string
 *               example: trainee
 *      TraineeResponse:
 *        type: object
 *        properties:
 *          _id:
 *              example: 5fbe47aa0b821722b8014e7f
 *          email:
 *              type: string
 *              example: amit.sanut@successive.tech
 *          name:
 *              type: string
 *              example: AmitSanu
 *          role:
 *              type: string
 *              example: trainee
 *          originalId:
 *              example: 5fbe47aa0b821722b8014e7f
 *          createdBy:
 *              example: 5fbe47aa0b821722b8014e7f
 *          createdAt:
 *              example: 2020-11-25T11:33:39.325Z
 *          v:
 *              example:0
 *      Unauthorized:
 *        type: object
 *        properties:
 *          error:
 *              example: Unauthorized
 *          message:
 *              example: Token not found
 *          status:
 *              example: 403
 *          timestamp:
 *               example: 2020-11-25T17:34:37.066Z
 *
 */


 traineeRouter.route('/')
/**
 * @swagger
 *
 * /api/trainee:
 *   get:
 *     tags:
 *       - Trainee
 *     description: List of all the trainees
 *     security:
 *       - Bearer: []
 *     consumes:
 *       - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *       - name: skip
 *         description: Number of elements to skip
 *         in: query
 *         required: false
 *         type: number
 *       - name: limit
 *         description: number of elements to show
 *         in: query
 *         required: false
 *         type: number
 *       - name: sort
 *         description: Parameter to sort (name or email)
 *         in: query
 *         required: false
 *         type: string
 *       - name: searchBy
 *         description: Element to search
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Trainee List
 *         schema:
 *              properties:
 *                  status:
 *                      example: Okay
 *                  message:
 *                      example: 'successfully fetched Trainee'
 *                  TotalCount:
 *                      example: 10
 *                  TraineeCount:
 *                      example: 2
 *                  data:
 *                      type: object
 *                      allOf:
 *                              - $ref: '#/definitions/TraineeResponse'
 *       403:
 *         description: unauthorised access
 *         schema:
 *              $ref: '#/definitions/Unauthorized'
 */


      .get(authMiddlware('getUser','read'),validationHandler(validation.get),TraineeController.get)

     // .get(TraineeController.get)

     /**
 * @swagger
 *
 * /api/trainee:
 *   post:
 *     tags:
 *       - Trainee
 *     description: Returns the success reponse on creation
 *     security:
 *          - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: Data of users.
 *         in: body
 *         required: true
 *         type: object
 *         schema:
 *             $ref: '#/definitions/TraineePost'
 *     responses:
 *       200:
 *         description: User Created Successfully
 *         schema:
 *              oneOf:
 *              properties:
 *                  status:
 *                      example: OK
 *                  message:
 *                      example: Trainee Created Successfully
 *                  data:
 *                      type: object
 *                      allOf:
 *                          - $ref: '#/definitions/TraineeResponse'
 *                      properties:
 *                              name:
 *                                  type: string
 *                                  example: "AmitSanu"
 *       403:
 *         description: unauthorised access
 *         schema:
 *              $ref: '#/definitions/Unauthorized'
 */
    .post(authMiddlware('getUser','read'),validationHandler(validation.create), TraineeController.create)

      //.post(authMiddlware('getUser','read'),validationHandler(validation.create),TraineeController.create)

      /**
 * @swagger
 *
 * /api/trainee:
 *   put:
 *     tags:
 *       - Trainee
 *     description: Returns the success reponse on Updation
 *     security:
 *          - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: Data of users.
 *         in: body
 *         required: true
 *         type: object
 *         schema:
 *          oneOf:
 *          properties:
 *              id:
 *                  example: 5e4e6e93c095d84d34045a30
 *              dataToUpdate:
 *                  type: object
 *                  allOf:
 *                      - $ref: '#/definitions/TraineePost'
 *     responses:
 *       200:
 *         description: User Updated Successfully
 *         schema:
 *              oneOf:
 *              properties:
 *                  status:
 *                      example: OK
 *                  message:
 *                      example: successfully upddate
 *                  data:
 *                      type: object
 *                      allOf:
 *                          - $ref: '#/definitions/TraineeResponse'
 *       403:
 *         description: unauthorised access
 *         schema:
 *              $ref: '#/definitions/Unauthorized'
 */
      .put(authMiddlware('getUser','read'),TraineeController.update,validationHandler(validation.update))

      /**
 * @swagger
 *
 * /api/trainee:
 *   delete:
 *     tags:
 *       - Trainee
 *     description: Returns the success reponse on deletion
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: ID of user to be deleted.
 *         in: body
 *         required: true
 *         type: string
 *         example: 5e4e6e93c095d84d34045a30
 *     responses:
 *       200:
 *         description: Data deleted
 *         schema:
 *              oneOf:
 *              properties:
 *                  status:
 *                      example: OK
 *                  message:
 *                      example: Deleted successfully
 *                  code:
 *                      example: 200
 *       403:
 *         description: unauthorised access
 *         schema:
 *              $ref: '#/definitions/Unauthorized'
 */
      .delete(authMiddlware('getUser','read'),TraineeController.delete,validationHandler(validation.delete));

      //traineeRouter.delete('/trainee/:id', TraineeController.remove, validationHandler(validation.delete));
export default traineeRouter;
