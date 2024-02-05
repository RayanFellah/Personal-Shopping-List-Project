"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const products_controller_1 = require("./controllers/products/products.controller");
const product_service_1 = require("./services/product/product.service");
const mongoose_1 = require("@nestjs/mongoose");
const product_model_1 = require("./models/product.model");
const user_model_1 = require("./models/user.model");
const user_controller_1 = require("./controllers/user/user.controller");
const user_service_1 = require("./services/user/user.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://rayan-app:4ibC9eyBseqKsoUa@cluster0.hsefmff.mongodb.net/?retryWrites=true&w=majority'),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'Product',
                    schema: product_model_1.productSchema,
                },
                {
                    name: 'User',
                    schema: user_model_1.userSchema,
                },
            ]),
        ],
        controllers: [products_controller_1.ProductController, user_controller_1.UserController],
        providers: [app_service_1.AppService, product_service_1.ProductService, user_service_1.UserService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map