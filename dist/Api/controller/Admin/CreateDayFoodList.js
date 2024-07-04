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
const UniqueNum_1 = __importDefault(require("../../Constants/UniqueNum"));
const CreateDayFoodList = (req, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, day, foodList } = req === null || req === void 0 ? void 0 : req.body;
    try {
        const order = new FoodlistSchema_1.default({
            id: (0, UniqueNum_1.default)(),
            date,
            day,
            foodList
        });
        yield order.save()
            .then((res) => {
            response.status(200).send({ "message": "Order Created Successfully", data: res });
        });
    }
    catch (error) {
        response.status(500).send({ message: "Internal Server Error", error });
        console.log("ERROR===>>>", error);
    }
});
exports.default = CreateDayFoodList;
