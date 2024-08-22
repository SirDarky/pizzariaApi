import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { parseStringToBoolean } from '../../commons/utils';

@Injectable()
export class DatabaseInitService implements OnModuleInit {
  constructor(
    @InjectDataSource() private readonly dataSource: DataSource,
    private readonly configService: ConfigService,
  ) {}

  onModuleInit(): void {
    //this.runInitializationScript();
  }

  private async runInitializationScript(): Promise<void> {
    try {
      const value = parseStringToBoolean(
        this.configService.get('DB_DROP_DATABASE') || 'false',
      );

      if (!value) return;

      await this.dataSource.query(
        'INSERT INTO NOME_DA_TABELA (name) VALUES(?)',
        [],
      );

      await this.dataSource.query(
        'INSERT INTO users (name, login, status) VALUES(?,?,?)',
        [],
      );

      await this.dataSource.query(
        'INSERT INTO users (name, login, status, subsidiaryId) VALUES(?,?,?,?)',
        [],
      );
    } catch (error) {
      console.error('Error initializing database:', error);
    }
  }
}
