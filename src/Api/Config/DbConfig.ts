import mongoose from "mongoose";
const DB_URL=process.env.DB_URL


const ConnectDb=async ()=>{
    try{
        await mongoose.connect(`${process.env.DB_URL}`,{
            
        })
        .then(()=>console.log("DB CONNECTED SUCCESSFULLY...!!"))
    }
    catch(error){
        console.log("ERROR===>>",error);
    }
}


export default ConnectDb;