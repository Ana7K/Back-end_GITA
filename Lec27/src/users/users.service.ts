import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';

import { Model, isValidObjectId } from 'mongoose';

import { User } from './schema/users.schema';

import { CreateUserDto } from './dto/create-user.dto';

import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.userModel.findOne({
      email: createUserDto.email,
    });

    if (existingUser) throw new BadRequestException('User already exists');

    const newUser = await this.userModel.create(createUserDto);

    return newUser;
  }

  async findAll() {
    return this.userModel.find();
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('Invalid id');

    const user = await this.userModel.findById(id);

    if (!user) throw new NotFoundException();

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (!isValidObjectId(id)) throw new BadRequestException();

    const user = await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });

    if (!user) throw new NotFoundException();

    return user;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException();

    const user = await this.userModel.findByIdAndDelete(id);

    if (!user) throw new NotFoundException();

    return user;
  }
}
