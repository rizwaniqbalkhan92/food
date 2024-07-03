import express from 'express';
import getFoodController from '../../controller/Admin/CreateDayFoodList';
import { addCardDeatils, addLocalPaymentMethod, getFoodStatus, loginUser, orderFood } from '../../Constants/Constant';
import loginUserN from '../../controller/User/Login';
import addLocalPaymentM from '../../controller/User/addLocalPaymentMethod'
import getFoodS from '../../controller/User/getFoodStatus'
import addCardD from '../../controller/User/addCardDetails'
import orderF from '../../controller/User/orderFood'



const userRouter=express.Router();

userRouter.post(`${loginUser}`,loginUserN)
userRouter.post(`${addLocalPaymentMethod}`,addLocalPaymentM)
userRouter.post(`${getFoodStatus}`,getFoodS)
userRouter.post(`${addCardDeatils}`,addCardD)
userRouter.post(`${orderFood}`,orderF)



export default userRouter;