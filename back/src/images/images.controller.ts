import { Controller, Get, Post, Body } from '@nestjs/common';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post()
  async saveImage(@Body() body: { url: string }) {
    return this.imagesService.saveImageUrl(body.url);
  }

  @Get()
  async getImages() {
    return this.imagesService.getImages();
  }
}
