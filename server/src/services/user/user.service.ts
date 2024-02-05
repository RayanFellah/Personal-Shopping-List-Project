import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignUp } from 'src/models/user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<SignUp>) {}

  async createNewUser(user: SignUp): Promise<SignUp> {
    if (await this.getUserByEmail(user.email)) {
      return;
    }
    const newUser = new this.userModel({
      name: user.name,
      password: user.password,
      email: user.email,
    });
    await newUser.save();
    return newUser;
  }

  async getUserByEmail(user: string): Promise<any> {
    const userLogin = await this.userModel.findOne({ email: user });
    if (userLogin) {
      return userLogin;
    }
    return false;
  }

  createToken(id: string): string {
    const token = jwt.sign({ userId: id }, 'secretKey', { expiresIn: '1h' });
    return token;
  }
}
