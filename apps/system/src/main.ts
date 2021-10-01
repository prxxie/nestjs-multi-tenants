import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SystemModule } from './system.module';

async function bootstrap() {
  const app = await NestFactory.create(SystemModule);

  const config = new DocumentBuilder()
    .setTitle('QAgent PM System APIs')
    .setDescription('QAgent PM System APIs')
    .setVersion('1.0')
    .addTag('apis')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apis', app, document);

  await app.listen(3000);
}
bootstrap();
