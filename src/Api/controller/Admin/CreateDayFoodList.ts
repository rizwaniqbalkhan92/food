import { Request,Response } from "express"
import FoodList from "../../model/Admin/FoodlistSchema";
import generateUniqueId from "../../Constants/UniqueNum";

const CreateDayFoodList=async(req:Request,response:Response)=>{

    const {date,day,foodList}=req?.body;
  
    try{
        const order= new FoodList({
           
            date,
            day,
            foodList
        }) 
        
         await order.save()
         .then((res:Object)=>{
            response.status(200).send({"message":"Order Created Successfully",data:res})
         })
    }
    catch(error){
        response.status(500).send({message:"Internal Server Error",error})
            console.log("ERROR===>>>",error)
    }
    
}




export default CreateDayFoodList


