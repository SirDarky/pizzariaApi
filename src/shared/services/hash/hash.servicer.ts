import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
  private saltRounds = 10;
  async encrypt(data: string): Promise<string> {
    return await bcrypt.hash(data, this.saltRounds);
  }
  async compare(data: string, hashedData: string): Promise<boolean> {
    return await bcrypt.compare(data, hashedData);
  }
}
