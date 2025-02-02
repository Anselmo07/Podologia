import { Controller, Put, Body, Post } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Endpoint para hacer login
  @Post('/login')
  async login(@Body() body: { email: string, password: string }) {
    try {
      const user = await this.usersService.login(body.email, body.password);
      if (!user) {
        return {
          message: 'Correo o contraseña incorrectos',
        };
      }
      // Si el login es exitoso, puedes devolver una respuesta adecuada (como el ID de usuario o su rol)
      return {
        message: 'Inicio de sesión exitoso',
        userId: user._id,
        role: user.role,
      };
    } catch (error) {
      // Manejo de errores
      return {
        message: error.message,
      };
    }
  }

  // Endpoint para hacer admin
  @Put('make-admin')
  async makeAdmin(@Body() body: { email: string }) {
    return this.usersService.makeAdmin(body.email);
  }
}
