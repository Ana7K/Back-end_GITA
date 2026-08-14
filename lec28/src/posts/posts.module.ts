import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Post, postsSchema } from './schema/post.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Post.name,
        schema: postsSchema,
      },
    ]),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
