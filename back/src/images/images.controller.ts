import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ImagesService } from './images.service';
import { Image } from './image.schema';
import { title } from 'process';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post()
  async saveImage(@Body() body: { title: string; beforeUrl: string; afterUrl: string }): Promise<Image> {
    return this.imagesService.saveImageUrl(body.title, body.beforeUrl, body.afterUrl);
  }

  @Get()
  async getImages(): Promise<Image[]> {
    return this.imagesService.getImages();
  }

  @Delete(":title")
  async deleteImg(@Param('title') title: string): Promise<Image | null> {
    return this.imagesService.deleteImg(title);
  }
}

