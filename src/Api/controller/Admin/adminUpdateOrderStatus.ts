import { Request,Response } from "express"
import OrderModel from "../../model/Admin/OrderListSchema";

const adminUpdateOrderStatusUser=async(req:Request,res:Response)=>{
    const {id:_id} =req.params;
    const {orderStatus}=req.body;

try{

    const orderUpdated= await OrderModel.findByIdAndUpdate
    (   _id,
        { 
          $set: { 
           orderStatus:orderStatus
          } 
        },
        { new: true, useFindAndModify: false } 
      );
      if(orderUpdated){
        return res.status(201).send({data:orderUpdated})
      }
}
catch(error){
        res.status(500).send({"message":"Internal Server Error"})
}
}




export default adminUpdateOrderStatusUser


