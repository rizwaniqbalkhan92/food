import { Request,Response } from "express"
import FoodList from "../../model/Admin/FoodlistSchema";
import OrderModel from "../../model/Admin/OrderListSchema";
import { error } from "console";

const orderFood=async(req:Request,response:Response)=>{

    const {username,userId,foodList,orderStatus, date}=req?.body

    try{

        const order= new OrderModel({
           
         username,
         userId,
            date,
            foodList,
            orderStatus
        }) 
        
         await order.save()
         .then((res:Object)=>{
            response.status(200).send({"message":"Order Created Successfully",data:res})
         })
       

    }
    catch(error){
        return response.status(500).send({"message":"Internal Server Error",error})
    }
}




export default orderFood


