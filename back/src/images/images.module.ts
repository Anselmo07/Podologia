import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { Image, ImageSchema } from './image.schema';  // Asegúrate de importar ambos correctamente

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Image', schema: ImageSchema }]) // Usar Image.name correctamente
  ],
  providers: [ImagesService],
  controllers: [ImagesController],
})
export class ImagesModule {}

