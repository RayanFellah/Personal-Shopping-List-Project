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

export const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productCategory: { type: String, required: true },
  date: { type: Date, required: true },
  productFreshness: { type: String, required: true },
  price: { type: Number, required: true },
  comments: { type: String, required: false },
  userId: { type: String, required: true },
});

export type Product = IProduct;
export type ProductWithId = IProductWithId;
// dbg
