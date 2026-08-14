import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './schema/post.schema';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name)
    private postsModel: Model<Post>,
  ) {}

  async create(userId: string, createPostDto: CreatePostDto) {
    const createPost = await this.postsModel.create({
      ...createPostDto,
      user: userId,
    });

    return createPost;
  }

  async findAll() {
    return this.postsModel.find().populate('user');
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid post ID');
    }

    const post = await this.postsModel.findById(id).populate('user');

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid post ID');
    }

    const post = await this.postsModel.findByIdAndUpdate(id, updatePostDto, {
      new: true,
    });

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    return post;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid post ID');
    }

    const post = await this.postsModel.findByIdAndDelete(id);

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    return post;
  }
}
