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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_validator_1 = require("express-validator");
const AddUserToOrganization_1 = __importDefault(require("../../model/Admin/AddUserToOrganization"));
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({ "errors": errors.array() });
    }
    const { email, password } = req.body;
    try {
        let userAdmin = yield AddUserToOrganization_1.default.findOne({ email });
        if (!userAdmin) {
            return res.status(400).send({ "message": "Invalid Credentials" });
        }
        const isMatch = yield bcryptjs_1.default.compare(password, userAdmin.password);
        if (!isMatch) {
            return res.status(400).send({ "message": "Invalid Credentials" });
        }
        const payload = {
            user: {
                userId: userAdmin.id
            }
        };
        jsonwebtoken_1.default.sign(payload, '123456789', { expiresIn: 360000 }, (err, token) => {
            if (err) {
                throw err;
            }
            res.status(200).send({ token });
        });
    }
    catch (error) {
        console.log("ERROR", error);
        res.status(500).send({ message: "Internal Server Error", error });
    }
});
exports.default = loginUser;
