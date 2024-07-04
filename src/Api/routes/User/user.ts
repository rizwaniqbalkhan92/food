import express from 'express';
import getFoodController from '../../controller/Admin/CreateDayFoodList';
import { addCardDeatils, addLocalPaymentMethod, allDayFoodListAdmin, getFoodStatus, loginUser, orderFood } from '../../Constants/Constant';
import loginUserN from '../../controller/User/Login';
import addLocalPaymentM from '../../controller/User/addLocalPaymentMethod'
import getFoodS from '../../controller/User/getFoodStatus'
import addCardD from '../../controller/User/addCardDetails'
import orderF from '../../controller/User/orderFood'
import allDayFoodListA from '../../controller/User/GetFoodList'
import allFoodListUser from '../../controller/User/GetFoodList';


const userRouter=express.Router();

userRouter.post(`${loginUser}`,loginUserN)
userRouter.post(`${addLocalPaymentMethod}`,addLocalPaymentM)
userRouter.post(`${getFoodStatus}`,getFoodS)
userRouter.post(`${addCardDeatils}`,addCardD)
userRouter.post(`${orderFood}`,orderF)
userRouter.get(`${allDayFoodListAdmin}/:id`,allFoodListUser);


export default userRouter;