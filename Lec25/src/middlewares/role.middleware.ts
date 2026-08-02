import { ForbiddenException, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const role = req.headers['role'];

    if (role !== 'Admin' && ['POST', 'PATCH', 'DELETE'].includes(req.method)) {
      throw new ForbiddenException('Only Admin can modify products');
    }

    next();
  }
}
