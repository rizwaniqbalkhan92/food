import { Request,Response } from "express"
import FoodList from "../../model/Admin/FoodlistSchema";

const updateDayFoodList=async(req:Request,res:Response)=>{
    const {id : _id} = req?.params
    const {date,day,foodlist} = req?.body

    const updatedFoodlist={
      foodlist
    }
    try{
        const foodList = await FoodList.findByIdAndUpdate(
            _id,
            { 
              $set: { 
                date: date, 
                day: day, 
                foodList: updatedFoodlist 
              } 
            },
            { new: true, useFindAndModify: false } 
          );
        // const foodList = await FoodList.findByIdAndUpdate({_id:id},{foodList:updatedFoodlist});
        if(!foodList){
            res.status(401).send({"message":"List Not Available"})
        }
       return res.status(200).send({data:foodList});
        
    }
    catch(error){
    
    
        res.status(500).send({message:"Internal Server Error",error});
    }
}




export default updateDayFoodList


