import express from 'express';
import getFoodController from '../../controller/Admin/CreateDayFoodList';
import { addUserInOrganizationAdmin, adminGetAllPaymentStatusFromUser, adminGetOrderFromUser, adminUpdateOrderStatusUser, allDayFoodListAdmin, createDayFoodListAdmin, deleteDayFoodListAdmin, forgetPasswordAdmin, forgetUserNameAdmin, loginAdmin, logoutAdmin, registerAdmin, updateDayFoodListAdmin } from '../../Constants/Constant';
import addUserInOrganizationA from '../../controller/Admin/addUserInOrganizationAdmin';
import adminGetAllPaymentStatusFromU from '../../controller/Admin/adminGetAllPaymentStatusFromUser';
import adminUpdateOrderStatusU from '../../controller/Admin/adminUpdateOrderStatus';
import allDayFoodListA from '../../controller/Admin/AllFoodListAdmin';
import CreateDayFoodList from '../../controller/Admin/CreateDayFoodList';
import deleteDayFoodList from '../../controller/Admin/DeleteDayFoodList';
import forgetPasswordUserAdmin from '../../controller/Admin/ForgetPassword';
import forgetPasswordUserNameA from '../../controller/Admin/ForgetUserNameAdmin';
import LoginUserAdmin from '../../controller/Admin/LoginUserAdmin';
import LogoutAdmin from '../../controller/Admin/LogoutAdmin';
import RegisterUser from '../../controller/Admin/RegisterUserAdmin';
import updateDayFoodList from '../../controller/Admin/UpddateDayFoodList';

const adminRouter=express.Router();

adminRouter.post(`${registerAdmin}`,RegisterUser);
adminRouter.post(`${addUserInOrganizationAdmin}`,addUserInOrganizationA);
adminRouter.get(`${adminGetAllPaymentStatusFromUser}`,adminGetAllPaymentStatusFromU);
adminRouter.post(`${adminGetOrderFromUser}`,adminGetAllPaymentStatusFromU);
adminRouter.put(`${adminUpdateOrderStatusUser}`,adminUpdateOrderStatusU);
adminRouter.get(`${allDayFoodListAdmin}/:id`,allDayFoodListA);
adminRouter.post(`${createDayFoodListAdmin}`,CreateDayFoodList);
adminRouter.delete(`${deleteDayFoodListAdmin}/:id`,deleteDayFoodList);
adminRouter.post(`${forgetPasswordAdmin}`,forgetPasswordUserAdmin);
adminRouter.post(`${forgetUserNameAdmin}`,forgetPasswordUserNameA);
adminRouter.post(`${loginAdmin}`,LoginUserAdmin);
adminRouter.post(`${logoutAdmin}`,LogoutAdmin);
adminRouter.put(`${updateDayFoodListAdmin}/:id`,updateDayFoodList);




  
export default adminRouter;