import { Router } from "express";
import { traineeRouter } from './Controllers';
import userRouter from './controllers/user/routes'

const mainRouter =  Router();

mainRouter.use('/trainee', traineeRouter)


mainRouter.use('/user', userRouter)
export default mainRouter;
//Router.arguments()
