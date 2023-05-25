import { ExecutionContext } from '@nestjs/common';

export const getUserId = (data: unknown, ctx: ExecutionContext): string => {
  const request: Request = ctx.switchToHttp().getRequest();
  return (request as any).user as string
};
