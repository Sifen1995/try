import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class User extends Document {
    @Prop({required:true})
    name:string;
    @Prop({ required: true,unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true, default: 'user' }) // Default role is 'user'
    role: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & Document;

