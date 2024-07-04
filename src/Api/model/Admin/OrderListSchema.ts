import mongoose ,{Document,Schema} from 'mongoose'


interface SchemaTyleOrder extends Document{
    username:string
    userId:string
    foodList:Array<Object>
    date:Date,
    orderStatus:string

}

const OrderSchema:Schema = new mongoose.Schema({
    username:String,
    userId:String,
    foodList:Array<Object>,
    date:Date,
    orderStatus:String
})

const OrderModel=  mongoose.model<SchemaTyleOrder>("OrderModel",OrderSchema)
export default OrderModel