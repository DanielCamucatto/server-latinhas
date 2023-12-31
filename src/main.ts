import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', 
    credentials: false
  });

  const config = new DocumentBuilder()
    .setTitle('Latinhas API')
    .setDescription('Documentação das rotas da API')
    .setVersion('0.0.1')
    .addTag('API')
    .build(); 

  const document = SwaggerModule.createDocument(app, config); 
  SwaggerModule.setup('Swagger', app, document);

  const PORT = process.env.PORT || 3001; 
  await app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

bootstrap();
