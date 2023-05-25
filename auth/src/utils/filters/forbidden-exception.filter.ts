import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { AbstractHttpAdapter } from '@nestjs/core';

@Catch(ForbiddenException)
export class ForbiddenExceptionFilter implements ExceptionFilter {
  constructor(
    private readonly httpAdapterHost: AbstractHttpAdapter,
  ) {}

  catch(exception: any, host: ArgumentsHost) {
    const httpAdapter = this.httpAdapterHost;

    const ctx = host.switchToHttp();
    const httpStatus = 403

    const responseBody = {
      error_message: 'Bad token',
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}