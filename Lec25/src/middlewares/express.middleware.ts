import { Request, Response, NextFunction } from 'express';

export function expressMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log('I am Express middleware');

  next();
}
