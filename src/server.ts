import express from 'express';
import dotenv from 'dotenv';
import {  baseUrl } from './Api/Constants/Constant';
import Routes from './Api/routes/Routes'
import ConnectDb from './Api/Config/DbConfig';

dotenv.config();
ConnectDb()
const app=express();
const PORT=process.env.PORT
app.use(express.json());
app.use(`/`,Routes)
app.listen(PORT,()=>{
console.log("RUNING SERVER AT "+PORT);
}) 