import { User } from '../dto/User';
import { Controller, Param, Body, Get, Post, Put, Delete, JsonController } from 'routing-controllers';



@JsonController("/api")
export class UserController {
  @Get('/users')
  getAll() {
    return 'This action returns all users';
  }

  @Get('/users/:id')
  getOne(@Param('id') id: number) {
    return 'This action returns user #' + id;
  }

  @Post('/users')
  post(@Body() user: User) {
    return user;
  }

  @Put('/users/:id')
  put(@Param('id') id: number, @Body() user: User) {
    return user;
  }

  @Delete('/users/:id')
  remove(@Param('id') id: number) {
    return 'Removing user...';
  }
}