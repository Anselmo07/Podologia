import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Image } from './image.schema';

@Injectable()
export class ImagesService {
  constructor(
    @InjectModel(Image.name) private readonly imageModel: Model<Image>,
  ) {}

  async saveImageUrl(url: string): Promise<Image> {
    const newImage = new this.imageModel({ url });
    return newImage.save();
  }

  async getImages(): Promise<Image[]> {
    return this.imageModel.find().exec();
  }
}
