import { Schema, Document, model } from 'mongoose';


export interface User extends Document {
  email: string;
  password: string;
  role: string;
}


export const UserSchema = new Schema<User>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
});


export const UserModel = model<User>('User', UserSchema);
