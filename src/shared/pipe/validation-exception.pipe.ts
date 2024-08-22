import { BadRequestException, ValidationError } from '@nestjs/common';
import { IErrorMessage } from '../commons/interfaces';
import { MessageService } from '../services/message/message.service';

export const createExceptionFactory =
  (errorMessageService: MessageService) =>
  (errors: ValidationError[]): BadRequestException => {
    const formattedErrors = errors.map((error) => ({
      property: error.property,
      constraints: error.constraints,
    }));

    const errorMessageArray: IErrorMessage[] = [];
    formattedErrors.forEach((item) => {
      Object.entries(item.constraints).forEach(([key, value]) => {
        try {
          const errorMessageItem = errorMessageService.get(value);
          errorMessageArray.push({
            property: item.property,
            ...errorMessageItem,
          });
        } catch (error) {
          errorMessageArray.push({
            property: item.property,
            code: key,
            message: value,
          });
        }
      });
    });

    return new BadRequestException({
      errors: errorMessageArray,
    });
  };
