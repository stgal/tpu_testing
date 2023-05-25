import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  UnauthorizedException,
} from '@nestjs/common';
import { AbstractHttpAdapter } from '@nestjs/core';

@Catch(UnauthorizedException)
export class UnauthorizedExceptionFilter implements ExceptionFilter {
  constructor(
    private readonly httpAdapterHost: AbstractHttpAdapter,
  ) {}

  catch(exception: any, host: ArgumentsHost) {
    const httpAdapter = this.httpAdapterHost;

    const ctx = host.switchToHttp();
    const httpStatus = 401

    const responseBody = {
      error_message: 'Bad id or password',
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}