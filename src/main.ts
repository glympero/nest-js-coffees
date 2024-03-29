import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true, // transform payloads to dto
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true, //converts for example string to number in pagination (string url params to numbers)
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
