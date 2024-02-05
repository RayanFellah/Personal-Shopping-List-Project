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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("../../services/product/product.service");
const user_service_1 = require("../../services/user/user.service");
let ProductController = class ProductController {
    constructor(productService, userService) {
        this.productService = productService;
        this.userService = userService;
    }
    async insertNewProduct(product, response, param1) {
        try {
            const newProduct = await this.productService.insertNewProduct(product, param1);
            response.status(common_1.HttpStatus.CREATED).json(newProduct);
        }
        catch (error) {
            response.status(common_1.HttpStatus.SERVICE_UNAVAILABLE).send(error.message);
        }
    }
    async getAllProducts(response, param1) {
        try {
            const products = await this.productService.getAllProducts(param1);
            response.status(common_1.HttpStatus.OK).json(products);
        }
        catch (error) {
            response.status(common_1.HttpStatus.SERVICE_UNAVAILABLE).send(error.message);
        }
    }
    async updateProduct(response, newProduct) {
        try {
            const product = await this.productService.updateProduct(newProduct);
            response.status(common_1.HttpStatus.OK).json(product);
        }
        catch (error) {
            response.status(common_1.HttpStatus.SERVICE_UNAVAILABLE).send(error.message);
        }
    }
    async deleteProduct(id, response) {
        try {
            const product = await this.productService.deleteProduct(id);
            response.status(common_1.HttpStatus.OK).send(product);
        }
        catch (error) {
            response.status(common_1.HttpStatus.SERVICE_UNAVAILABLE).send(error.message);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "insertNewProduct", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllProducts", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
ProductController = __decorate([
    (0, common_1.Controller)('api/product'),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        user_service_1.UserService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=products.controller.js.map