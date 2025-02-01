import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.schema";

@Injectable()
export class UsersService {
  constructor(@InjectModel("User") private userModel: Model<User>) {} // Cambiado a "User"

  async makeAdmin(email: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    user.role = "admin"; // Asignar rol de admin
    return user.save(); // Guardar cambios
  }
}


