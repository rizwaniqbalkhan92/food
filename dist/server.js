"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const Routes_1 = __importDefault(require("./Api/routes/Routes"));
const DbConfig_1 = __importDefault(require("./Api/Config/DbConfig"));
dotenv_1.default.config();
(0, DbConfig_1.default)();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use(`/`, Routes_1.default);
app.listen(PORT, () => {
    console.log("RUNING SERVER AT " + PORT);
});
