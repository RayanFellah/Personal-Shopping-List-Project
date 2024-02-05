import { Model } from 'mongoose';
import { Product, ProductWithId } from 'src/models/product.model';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<ProductWithId>);
    insertNewProduct(product: Product, userId: string): Promise<ProductWithId>;
    getAllProducts(userId: string): Promise<ProductWithId[]>;
    getProductById(id: string): Promise<ProductWithId>;
    updateProduct(newProduct: ProductWithId): Promise<ProductWithId | string>;
    deleteProduct(id: string): Promise<ProductWithId>;
}
