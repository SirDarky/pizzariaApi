import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export async function appSwagger(app: INestApplication): Promise<void> {
  const config = new DocumentBuilder()
    .setTitle("DK's Pizzaria")
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
}
