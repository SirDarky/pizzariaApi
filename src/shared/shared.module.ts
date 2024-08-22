import { Global, Module } from '@nestjs/common';
import { DatabaseInitService } from './services/database-init/database-init.service';
import { MessageService } from './services/message/message.service';
import { ConfigService } from '@nestjs/config';
import { HashService } from './services/hash/hash.servicer';

@Global()
@Module({
  providers: [MessageService, DatabaseInitService, ConfigService, HashService],
  exports: [MessageService, DatabaseInitService, HashService],
})
export class SharedModule {}
