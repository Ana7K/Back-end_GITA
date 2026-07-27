import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './DTO/user.dto';

@Injectable()
export class UserService {
  users = [
    {
      id: 1,
      name: 'ana',
      email: 'ana@gmail.com',
      age: 22,
    },
    {
      id: 2,
      name: 'nino',
      email: 'nino@gmail.com',
      age: 21,
    },
    {
      id: 3,
      name: 'sandro',
      email: 'sandro@gmail.com',
      age: 23,
    },
    {
      id: 4,
      name: 'nika',
      email: 'nika@gmail.com',
      age: 20,
    },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    const user = this.users.find((el) => el.id === Number(id));

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  createUser(body: CreateUserDTO) {
    const lastId = this.users[this.users.length - 1]?.id || 0;
    const newObj = {
      id: lastId + 1,
      name: body.name,
      email: body.email,
      age: body.age,
    };

    this.users.push(newObj);
    return newObj;
  }

  deleteUser(id: number) {
    const index = this.users.findIndex((el) => el.id === Number(id));

    if (index === -1) throw new NotFoundException('User not found');

    const deleteUser = this.users.splice(index, 1);

    return deleteUser;
  }
}
