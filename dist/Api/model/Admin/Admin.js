"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchemaAdmin = new mongoose_1.default.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    image: { type: Buffer, required: false },
    userRole: { type: String, required: true }
});
const UserAdminModel = mongoose_1.default.model("UserAdminModel", UserSchemaAdmin);
exports.default = UserAdminModel;
