import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Image } from './image.schema';

@Injectable()
export class ImagesService {
  constructor(@InjectModel('Image') private readonly imageModel: Model<Image>) {}

  async saveImageUrl(title: string, beforeUrl: string, afterUrl: string): Promise<Image> {
    const newImage = new this.imageModel({ title, beforeUrl, afterUrl });
    return newImage.save();
  }

  async getImages(): Promise<Image[]> {
    return this.imageModel.find().exec();
  }

  async deleteImg (title:string):Promise<Image | null>{
    const img = this.imageModel.findOne({title});
    await this.imageModel.deleteOne({title});
    return img;
  }
    
}
