"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Constant_1 = require("../Constants/Constant");
const routes_1 = __importDefault(require("./Admin/routes"));
const user_1 = __importDefault(require("./User/user"));
const app = (0, express_1.default)();
app.use(`${Constant_1.apiServiceAdmin}`, routes_1.default);
app.use(`${Constant_1.apiService}`, user_1.default);
exports.default = app;
