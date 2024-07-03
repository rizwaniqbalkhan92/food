"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Constant_1 = require("../../Constants/Constant");
const Login_1 = __importDefault(require("../../controller/User/Login"));
const addLocalPaymentMethod_1 = __importDefault(require("../../controller/User/addLocalPaymentMethod"));
const getFoodStatus_1 = __importDefault(require("../../controller/User/getFoodStatus"));
const addCardDetails_1 = __importDefault(require("../../controller/User/addCardDetails"));
const orderFood_1 = __importDefault(require("../../controller/User/orderFood"));
const userRouter = express_1.default.Router();
userRouter.post(`${Constant_1.loginUser}`, Login_1.default);
userRouter.post(`${Constant_1.addLocalPaymentMethod}`, addLocalPaymentMethod_1.default);
userRouter.post(`${Constant_1.getFoodStatus}`, getFoodStatus_1.default);
userRouter.post(`${Constant_1.addCardDeatils}`, addCardDetails_1.default);
userRouter.post(`${Constant_1.orderFood}`, orderFood_1.default);
exports.default = userRouter;
