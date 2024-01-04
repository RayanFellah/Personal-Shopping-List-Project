interface ISignIn {
    email: string;
    password: string;
}

interface ISignInWithId {
    _id: string;
    email: string;
    password: string;
}
export type SignInWithId = ISignInWithId; 
export type SignIn = ISignIn; 