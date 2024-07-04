"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FoodlistSchema_1 = __importDefault(require("../../model/Admin/FoodlistSchema"));
const updateDayFoodList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: _id } = req === null || req === void 0 ? void 0 : req.params;
    const { date, day, foodlist } = req === null || req === void 0 ? void 0 : req.body;
    const updatedFoodlist = {
        foodlist
    };
    try {
        const foodList = yield FoodlistSchema_1.default.findByIdAndUpdate(_id, {
            $set: {
                date: date,
                day: day,
                foodList: updatedFoodlist
            }
        }, { new: true, useFindAndModify: false });
        // const foodList = await FoodList.findByIdAndUpdate({_id:id},{foodList:updatedFoodlist});
        if (!foodList) {
            res.status(401).send({ "message": "List Not Available" });
        }
        return res.status(200).send({ data: foodList });
    }
    catch (error) {
        res.status(500).send({ message: "Internal Server Error", error });
    }
});
exports.default = updateDayFoodList;
