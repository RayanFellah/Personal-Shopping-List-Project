import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { SignUp } from 'src/models/user.model';
import { UserService } from 'src/services/user/user.service';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/signup')
  async createNewUser(@Body() user: SignUp, @Res() response: Response) {
    try {
      const newUser = await this.userService.createNewUser(user);
      response.status(HttpStatus.CREATED).json(newUser);
    } catch (error) {
      response.status(HttpStatus.SERVICE_UNAVAILABLE).send(error.message);
    }
  }
//
  @Post('/signin')
  async getUserId(@Body() user: SignUp, @Res() response: Response) {
    try {
      const newUser = await this.userService.getUserByEmail(user.email);
      if (user.password == newUser.password) {
        const token = this.userService.createToken(String(newUser._id));
        response.status(HttpStatus.OK).json(token);
      } else {
        response.send(undefined);
      }
    } catch (error) {
      response.status(HttpStatus.SERVICE_UNAVAILABLE).send(error.message);
    }
  }
}
