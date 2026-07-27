import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './DTO/user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get('/users/:id')
  getUserById(@Param() params) {
    const id = params.id;
    return this.userService.getUserById(id);
  }

  @Post('/users')
  createUser(@Body() body: CreateUserDTO) {
    return this.userService.createUser(body);
  }

  @Delete('/users/:id')
  deleteUser(@Param() params) {
    const id = params.id;
    return this.userService.deleteUser(id);
  }
}
