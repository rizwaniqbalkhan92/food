import { Request,Response } from "express"
import { validationResult } from "express-validator";
import NormalUserModel from "../../model/Admin/AddUserToOrganization";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'


const addUserInOrganizationAdmin=async(req:Request,res:Response)=>{
    console.log("req",req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ "errors": errors.array() });
    }
    const { username, password,userRole, email, image } = req.body;
    try {
      let userAdmin = await NormalUserModel.findOne({ email });
  
      if (userAdmin) {
        return res.status(400).send({ "message": "User Already Exists" });
      }
  
      userAdmin = new NormalUserModel({
        username,
        email,
        image,
        password,
        userRole
      });
  
      const salt = await bcrypt.genSalt(10);
      userAdmin.password = await bcrypt.hash(password, salt);
      await userAdmin.save();
  
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
          res.status(201).send({ token });
        }
      );
    } catch (error) {
      console.log("ERROR",error)
      res.status(500).send({ message: "Internal Server Error" ,error});
    }
}




export default addUserInOrganizationAdmin


