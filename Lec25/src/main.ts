import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { expressMiddleware } from './middlewares/express.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(expressMiddleware);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
