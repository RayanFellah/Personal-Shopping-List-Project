import { Response } from 'express';
import { SignUp } from 'src/models/user.model';
import { UserService } from 'src/services/user/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createNewUser(user: SignUp, response: Response): Promise<void>;
    getUserId(user: SignUp, response: Response): Promise<void>;
}
