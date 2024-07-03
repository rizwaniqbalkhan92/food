// import { Request,Response } from "express"
// import { check,validationResult } from "express-validator"
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';
// import UserAdminModel from "../../model/Admin/Admin";

// const RegisterUser=async(req:Request,res:Response)=>{
//     console.log("check",req.body)
//     const errors= validationResult(req);
//     if(!errors.isEmpty()){
//        return res.status(400).send({"errors":errors?.array()});
//     }
//    const {username,password,email,image}=req?.body;
// try{

//     let userAdmin = await UserAdminModel.findOne({email});

//     if(userAdmin){
//         res.status(400).send({"message":"User Admin Already Exists"});

//     }

//     userAdmin=new UserAdminModel({
//         username,email,image,
//         password
//     })

//     const slat=await bcrypt.genSalt(10);
//     userAdmin.password = await bcrypt.hash(password,slat)
//     await userAdmin.save()

//     const payload ={
//         user:{
//             userId:userAdmin
//         }
//     }
//     jwt.sign(payload,'123456789'),
//     {expiresIn:360000},
//     (err:string,token:string)=>{
//         if(err) { throw err}
//         res.status(201).send({token})
//     }


// }
// catch(error){
//  res.status(500).send({message:"Internal Server Error"})
// }
// }




// export default RegisterUser


import { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import UserAdminModel from "../../model/Admin/Admin";

const RegisterUser = async (req: Request, res: Response) => {
  console.log("check", req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ "errors": errors.array() });
  }
  const { username, password,userRole, email, image } = req.body;
  try {
    let userAdmin = await UserAdminModel.findOne({ email });

    if (userAdmin) {
      return res.status(400).send({ "message": "User Admin Already Exists" });
    }

    userAdmin = new UserAdminModel({
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
};

export default RegisterUser;
