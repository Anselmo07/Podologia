import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagesModule } from './images/images.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(),  // Asegúrate de cargar las variables de entorno
    MongooseModule.forRoot(process.env.API_URL || ''),  // Usa la variable de entorno aquí
    ImagesModule, UserModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
