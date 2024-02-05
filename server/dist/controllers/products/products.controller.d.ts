import { Product, ProductWithId } from 'src/models/product.model';
import { ProductService } from 'src/services/product/product.service';
import { Response } from 'express';
import { UserService } from 'src/services/user/user.service';
export declare class ProductController {
    private readonly productService;
    private readonly userService;
    constructor(productService: ProductService, userService: UserService);
    insertNewProduct(product: Product, response: Response, param1: string): Promise<void>;
    getAllProducts(response: Response, param1: string): Promise<void>;
    updateProduct(response: Response, newProduct: ProductWithId): Promise<void>;
    deleteProduct(id: string, response: Response): Promise<void>;
}
