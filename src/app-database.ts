import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { parseStringToBoolean } from './shared/commons/utils';
import { Client } from './models/client.entity';

const Entity = [Client];

const TypeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get<string>('DATABASE_HOST', 'localhost'),
  port: configService.get<number>('DATABASE_PORT', 5432),
  username: configService.get<string>('DATABASE_USERNAME', 'admin'),
  password: configService.get<string>('DATABASE_PASSWORD', 'admin'),
  database: configService.get<string>('DATABASE_NAME', 'pizzeria'),
  dropSchema: parseStringToBoolean(
    configService.get('DB_DROP_DATABASE') || 'false',
  ),
  entities: Entity,
  synchronize: true,
});

export default TypeOrmConfig;
