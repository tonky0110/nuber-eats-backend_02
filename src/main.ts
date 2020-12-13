import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { jwtMiddleware } from './jwt/jwt.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // console.log(`process.env.NODE_ENV:`, process.env);
  app.useGlobalPipes(new ValidationPipe());
  app.use(jwtMiddleware);
  await app.listen(3000);
}
bootstrap();
