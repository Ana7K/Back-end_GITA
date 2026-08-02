import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { UserAgent } from '../middlewares/browser.middleware';
import { AuthMiddleware } from '../middlewares/role.middleware';
import { expressMiddleware } from '../middlewares/express.middleware';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(expressMiddleware).forRoutes('products');

    consumer.apply(UserAgent).forRoutes('products');

    consumer.apply(AuthMiddleware).forRoutes(
      {
        path: 'products',
        method: RequestMethod.POST,
      },
      {
        path: 'products/:id',
        method: RequestMethod.PATCH,
      },
      {
        path: 'products/:id',
        method: RequestMethod.DELETE,
      },
    );
  }
}
