import mongoose ,{Schema,Document}  from "mongoose";

interface OrderSchemaType extends Document{
    id:number
    date:Date
    day:string
    foodList:Array<Object>
    
}


const OrderSchema:Schema=new mongoose.Schema({
    id:Number,
    datte:String,
    day:String,
    foodList:Array
})


const FoodList= mongoose.model<OrderSchemaType>("Foodlist",OrderSchema)

export default FoodList