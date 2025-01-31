import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173',  // URL de tu frontend
    methods: 'GET, POST, PUT, DELETE',  // Métodos permitidos
    allowedHeaders: 'Content-Type, Authorization',  // Encabezados permitidos
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
