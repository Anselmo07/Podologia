import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { UserSchema } from './user.schema';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]) // Usar Image.name correctamente
    ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserModule {}