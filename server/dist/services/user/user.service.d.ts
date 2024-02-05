import { Model } from 'mongoose';
import { SignUp } from 'src/models/user.model';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<SignUp>);
    createNewUser(user: SignUp): Promise<SignUp>;
    getUserByEmail(user: string): Promise<any>;
    createToken(id: string): string;
}
