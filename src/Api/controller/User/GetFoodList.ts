import { Request,Response } from "express"
import FoodList from "../../model/Admin/FoodlistSchema"

const allFoodListUser=async(req:Request,res:Response)=>{
    const {id} = req?.params
try{

    const foodList = await FoodList.findById({_id:id});
    if(!foodList){
      return  res.status(204).send({"message":"List Not Available"})
    }
   return res.status(200).send({data:foodList});
    
}
catch(error){


    res.status(500).send({message:"Internal Server Error",error});
    
}
}




export default allFoodListUser


