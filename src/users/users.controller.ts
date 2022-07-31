import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { SignUpBodyParams } from './dto/users.dto'

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/sign-up')
  signUp(
      @Body() signUpBodyParams : SignUpBodyParams,
  ): any {
    return this.usersService.signUp(signUpBodyParams);
  }
}