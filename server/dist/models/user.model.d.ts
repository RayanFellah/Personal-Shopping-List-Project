import mongoose from 'mongoose';
interface ISignUp {
    name: string;
    password: string;
    email: string;
}
interface ISignIn {
    email: string;
    password: string;
}
interface ISignInWithId {
    _id: string;
    email: string;
    password: string;
}
export declare const userSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    password: string;
    email: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    password: string;
    email: string;
}>> & Omit<mongoose.FlatRecord<{
    name: string;
    password: string;
    email: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
export type SignUp = ISignUp;
export type SignIn = ISignIn;
export type SignInWithId = ISignInWithId;
export {};
