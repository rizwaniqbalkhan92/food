
import express from 'express';
import { apiService, apiServiceAdmin } from '../Constants/Constant';
import adminRouter from './Admin/routes';
import userRouter from './User/user';


const app=express();
 app.use(`${apiServiceAdmin}`,adminRouter)
app.use(`${apiService}`,userRouter)


export default app

