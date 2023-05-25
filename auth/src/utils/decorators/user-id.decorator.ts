import { createParamDecorator } from '@nestjs/common';

import { getUserId } from '../http-headers';

export const UserId = createParamDecorator(getUserId);
