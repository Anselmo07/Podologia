import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema'; 

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  
  async login(email: string, password: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new Error('Correo o contraseña incorrectos');
    }

    if (user.password !== password) {
      throw new Error('Correo o contraseña incorrectos');
    }

    return user; 
  }

  async makeAdmin(email: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    user.role = 'admin'; 
    return user.save(); 
  }
}





