import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { UnauthorizedExceptionFilter } from './utils/filters/unauthorized-exception.filter';
import { ForbiddenExceptionFilter } from './utils/filters/forbidden-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const adapterHost = app.get(HttpAdapterHost);
  const { httpAdapter } = adapterHost;

  app.useGlobalFilters(
    new UnauthorizedExceptionFilter(httpAdapter),
    new ForbiddenExceptionFilter(httpAdapter)
  );

  await app.listen(3001);
}
bootstrap();
