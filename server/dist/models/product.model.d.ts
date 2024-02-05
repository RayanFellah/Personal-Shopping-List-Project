import * as mongoose from 'mongoose';
interface IProductWithId {
    _id: string;
    productName: string;
    productCategory: string;
    date: Date;
    productFreshness: string;
    price: number;
    comments: string;
    userId: string;
}
interface IProduct {
    productName: string;
    productCategory: string;
    date: Date;
    productFreshness: string;
    price: number;
    comments: string;
    userId: string;
}
export declare const productSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    productName: string;
    date: Date;
    productCategory: string;
    productFreshness: string;
    price: number;
    userId: string;
    comments?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    productName: string;
    date: Date;
    productCategory: string;
    productFreshness: string;
    price: number;
    userId: string;
    comments?: string;
}>> & Omit<mongoose.FlatRecord<{
    productName: string;
    date: Date;
    productCategory: string;
    productFreshness: string;
    price: number;
    userId: string;
    comments?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
export type Product = IProduct;
export type ProductWithId = IProductWithId;
export {};
