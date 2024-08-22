import { Injectable } from '@nestjs/common';
import { BusinessErrorMessage } from '../../exception/bussiness.error.message';
import { IErrorMessage } from '../../commons/interfaces';

@Injectable()
export class MessageService {
  get(code: string): IErrorMessage {
    const message: string = BusinessErrorMessage[code];
    if (!message) {
      throw new Error(`code not found ${code}.`);
    }
    return { code, message };
  }
}
