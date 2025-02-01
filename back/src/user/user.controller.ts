import { Controller, Put, Body } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Put('/make-admin')
  async makeAdmin(@Body() body: { email: string }) {
    return this.usersService.makeAdmin(body.email);
  }
}

