import { Schema, Document, model } from "mongoose";

export interface User extends Document {
  email: string;
  password: string;
  role: string; // Campo de rol (user/admin)
}

// Define el esquema de Mongoose
export const UserSchema = new Schema<User>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
});

// Exporta el modelo de usuario
export const UserModel = model<User>("User", UserSchema);

