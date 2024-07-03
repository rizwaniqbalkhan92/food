"use strict";
// import { Request,Response } from "express"
// import { check,validationResult } from "express-validator"
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';
// import UserAdminModel from "../../model/Admin/Admin";
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
const express_validator_1 = require("express-validator");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const Admin_1 = __importDefault(require("../../model/Admin/Admin"));
const RegisterUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("check", req.body);
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({ "errors": errors.array() });
    }
    const { username, password, email, image } = req.body;
    try {
        let userAdmin = yield Admin_1.default.findOne({ email });
        if (userAdmin) {
            return res.status(400).send({ "message": "User Admin Already Exists" });
        }
        userAdmin = new Admin_1.default({
            username,
            email,
            image,
            password
        });
        const salt = yield bcryptjs_1.default.genSalt(10);
        userAdmin.password = yield bcryptjs_1.default.hash(password, salt);
        yield userAdmin.save();
        const payload = {
            user: {
                userId: userAdmin.id
            }
        };
        jsonwebtoken_1.default.sign(payload, '123456789', { expiresIn: 360000 }, (err, token) => {
            if (err) {
                throw err;
            }
            res.status(201).send({ token });
        });
    }
    catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});
exports.default = RegisterUser;
