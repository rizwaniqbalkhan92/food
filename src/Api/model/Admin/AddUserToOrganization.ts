import mongosse,{Document,Schema} from 'mongoose';


interface NormalUserSchemaType extends Document{

    name:string,
    email:string,
    password:string
    roleOfUser:string
}



const NormalUserSchema:Schema= new mongosse.Schema({
    name:String,
    email:String,
    password:String,
    roleOfUser:String
})


const NormalUserModel=mongosse.model<NormalUserSchemaType>("NormalUser",NormalUserSchema)

export default NormalUserModel