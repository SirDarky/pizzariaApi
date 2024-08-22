import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

import { MessageService } from './shared/services/message/message.service';
import { createExceptionFactory } from './shared/pipe/validation-exception.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const messageService = app.get<MessageService>(MessageService);

  const port = configService.get<number>('APP_PORT_SERVER', 3000);
  const host = configService.get<string>('APP_IP_SERVER', 'localhost');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      exceptionFactory: createExceptionFactory(messageService),
    }),
  );

  await app.listen(port, host, () => {
    console.log(
      `-------------------------------------------------------------------`,
    );
    console.log(`Servidor rodando em http://${host}:${port}/`);
    console.log(
      `Servidor graphql playground rodando em http://${host}:${port}/graphql`,
    );
    console.log(
      '-------------------------------------------------------------------',
    );
  });
}
bootstrap();
