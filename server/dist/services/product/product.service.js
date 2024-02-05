"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongodb_1 = require("mongodb");
const mongoose_2 = require("mongoose");
let ProductService = class ProductService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async insertNewProduct(product, userId) {
        const productId = Math.random.toString();
        const newProduct = new this.productModel({
            productId: productId,
            productName: product.productName,
            productCategory: product.productCategory,
            date: product.date,
            productFreshness: product.productFreshness,
            price: product.price,
            comments: product.comments,
            userId: userId,
        });
        await newProduct.save();
        return newProduct;
    }
    async getAllProducts(userId) {
        return await this.productModel.find({ userId: userId });
    }
    async getProductById(id) {
        const product = await this.productModel.findOne({ _id: new mongodb_1.ObjectId(id) });
        return product;
    }
    async updateProduct(newProduct) {
        try {
            const updateResult = await this.productModel.updateOne({ _id: newProduct._id }, { $set: newProduct });
            if (updateResult.modifiedCount > 0) {
                console.log('Mise à jour réussie !');
                return newProduct;
            }
            else {
                return 'La mise à jour a échoué.';
            }
        }
        catch (error) {
            return error.message;
        }
    }
    async deleteProduct(id) {
        const product = await this.getProductById(id);
        await this.productModel.deleteOne({ _id: product._id }).exec();
        return product;
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Product')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map