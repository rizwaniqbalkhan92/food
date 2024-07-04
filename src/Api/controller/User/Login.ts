import { Request,Response } from "express"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { validationResult } from "express-validator";
import NormalUserModel from "../../model/Admin/AddUserToOrganization";

const loginUser=async(req:Request,res:Response)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ "errors": errors.array() });
    }
  
    const { email, password } = req.body;
    try {
      let userAdmin = await NormalUserModel.findOne({ email });
  
      if (!userAdmin) {
        return res.status(400).send({ "message": "Invalid Credentials" });
      }
  
      const isMatch = await bcrypt.compare(password, userAdmin.password);
      if (!isMatch) {
        return res.status(400).send({ "message": "Invalid Credentials" });
      }
  
      const payload = {
        user: {
          userId: userAdmin.id
        }
      };
  
      jwt.sign(
        payload,
        '123456789',
        { expiresIn: 360000 },
        (err, token) => {
          if (err) {
            throw err;
          }
          res.status(200).send({ token });
        }
      );
    } catch (error) {
      console.log("ERROR", error);
      res.status(500).send({ message: "Internal Server Error", error });
    }
}




export default loginUser


