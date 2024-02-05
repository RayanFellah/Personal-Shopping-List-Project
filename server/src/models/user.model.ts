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

export const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

export type SignUp = ISignUp;
export type SignIn = ISignIn;
export type SignInWithId = ISignInWithId;
