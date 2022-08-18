import { Param, Body, Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { SignUpBodyParams } from './dto/users.dto';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/sign-up')
  signUp(@Body() signUpBodyParams: SignUpBodyParams): any {
    return this.usersService.signUp(signUpBodyParams);
  }

  @Get('/list')
  getUserList(): any {
    return this.usersService.getUserList();
  }

  @Put('/:user_id')
  updateUser(
    @Param('user_id') userId: number,
    @Body() updateUserBodyParams: any,
  ): any {
    return this.usersService.updateUserById(
      userId,
      updateUserBodyParams.name
    );
  }

  @Delete('/:user_id')
  deleteUser(@Param('user_id') userId: number): any {
    return this.usersService.deleteUserById(userId);
  }
}
