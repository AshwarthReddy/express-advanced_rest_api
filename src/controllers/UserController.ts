import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { UserDTO } from '../dto/User';
import { Param, Body, Get, Post, Put, Delete, JsonController } from 'routing-controllers';
import { UserRepo } from '../DB/UserRepo';
import { User } from '../entity/User';



@JsonController("/api")
export class UserController {

  constructor(){}

  @Get('/users')
  getAll() {
    let users = UserRepo.find();
    console.log(users);
    return users;
  }

  @Get('/users/:id')
  getOne(@Param('id') id: string) {
    return UserRepo.findBy(id);
  }

  @Post('/users')
  post(@Body() user: UserDTO) {
    let entityUser: User = plainToClass(User, user);
    console.log(entityUser)
    return UserRepo.save(entityUser);
  }

  @Put('/users/:id')
  async put(@Param('id') id: number, @Body() user: UserDTO) {
    
    let existingUser = await UserRepo.findBy(id);
    if(existingUser){
      let entityUser: User = plainToClass(User, user);
      return UserRepo.save(entityUser);
    }

  
  }

  @Delete('/users/:id')
  async remove(@Param('id') id: string) {
    let user = await UserRepo.findBy(id)
    return UserRepo.remove(user);
  }
}