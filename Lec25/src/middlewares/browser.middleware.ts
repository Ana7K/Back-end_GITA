import { ForbiddenException, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class UserAgent implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.headers['user-agent']);
    if (req.headers['user-agent']?.includes('Mozilla'))
      throw new ForbiddenException('Browser request is not allowed');
    next();
  }
}
