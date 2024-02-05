import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Model } from 'mongoose';
import { Product, ProductWithId } from 'src/models/product.model';

@Injectable()
export class ProductService {
  // private products: Product[];
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductWithId>,
  ) {}

  async insertNewProduct(
    product: Product,
    userId: string,
  ): Promise<ProductWithId> {
    const productId = Math.random.toString();
    const newProduct = new this.productModel({
      productId: productId,
      productName: product.productName,
      productCategory: product.productCategory,
      date: product.date,
      productFreshness: product.productFreshness,
      price: product.price,
      comments: product.comments,
      userId: userId, // dbg
    });
    await newProduct.save();
    return newProduct;
  }

  async getAllProducts(userId: string): Promise<ProductWithId[]> {
    return await this.productModel.find({ userId: userId });
  }

  async getProductById(id: string): Promise<ProductWithId> {
    const product = await this.productModel.findOne({ _id: new ObjectId(id) });
    return product;
  }

  async updateProduct(
    newProduct: ProductWithId,
  ): Promise<ProductWithId | string> {
    try {
      const updateResult = await this.productModel.updateOne(
        { _id: newProduct._id },
        { $set: newProduct },
      );
      if (updateResult.modifiedCount > 0) {
        console.log('Mise à jour réussie !');
        return newProduct;
      } else {
        return 'La mise à jour a échoué.';
      }
    } catch (error) {
      return error.message;
    }
  }

  async deleteProduct(id: string): Promise<ProductWithId> {
    const product = await this.getProductById(id);
    await this.productModel.deleteOne({ _id: product._id }).exec();
    return product;
  }
}
