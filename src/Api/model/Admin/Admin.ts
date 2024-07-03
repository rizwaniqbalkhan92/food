import mongoose, { Schema, Document } from "mongoose";

// Define the TypeScript interface
interface UserSchemaType extends Document {
    email: string;
    password: string;
    username: string;
    image: Buffer; 
    userRole: string;
}

const UserSchemaAdmin: Schema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    image: { type: Buffer, required: false }, 
        userRole: { type: String, required: true }
});

const UserAdminModel = mongoose.model<UserSchemaType>("UserAdminModel", UserSchemaAdmin);

export default UserAdminModel;
