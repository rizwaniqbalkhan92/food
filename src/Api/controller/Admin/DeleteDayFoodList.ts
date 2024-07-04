import { Request,Response } from "express"
import FoodList from "../../model/Admin/FoodlistSchema"

const deleteDayFoodList=async(req:Request,res:Response)=>{
    const {id:_id}=req.params;

try{

    const response= await FoodList.findByIdAndDelete({_id});
    res.status(201).send({"message":"Record Deleted Successfully",res:response});

    
}
catch(error){
    res.status(500).send({"message":"Internal Server Error",error});
    
}
}




export default deleteDayFoodList


