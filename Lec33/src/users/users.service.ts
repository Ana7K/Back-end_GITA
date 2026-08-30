import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PinoLogger } from 'nestjs-pino';
import { faker } from '@faker-js/faker';
import * as bcrypt from 'bcrypt';

import { User, UserDocument } from './schemas/user.schema';

const SEED_COUNT = 100;

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    private readonly logger: PinoLogger,
  ) {
    this.logger.setContext(UsersService.name);
  }

  async onModuleInit() {
    const existing = await this.userModel.estimatedDocumentCount();

    if (existing >= SEED_COUNT) {
      this.logger.info({ count: existing }, 'User seed skipped');
      return;
    }

    const toInsert = SEED_COUNT - existing;

    this.logger.info({ existing, toInsert }, 'Seeding users');

    const password = await bcrypt.hash('123456', 10);

    const users = Array.from({ length: toInsert }, () => ({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password,
    }));

    await this.userModel.insertMany(users);

    this.logger.info({ count: toInsert }, 'User seed completed');
  }

  async create(data: Partial<User>) {
    this.logger.info({ email: data.email }, 'Creating user');

    const user = await this.userModel.create(data);

    this.logger.info({ userId: user._id }, 'User created');

    return user;
  }

  async findByEmail(email: string) {
    this.logger.info({ email }, 'Finding user by email');

    return this.userModel.findOne({ email });
  }
}
