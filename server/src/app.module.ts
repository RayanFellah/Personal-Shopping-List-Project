import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductController } from './controllers/products/products.controller';
import { ProductService } from './services/product/product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { productSchema } from './models/product.model';
import { userSchema } from './models/user.model';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://rayan-app:4ibC9eyBseqKsoUa@cluster0.hsefmff.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([
      {
        name: 'Product',
        schema: productSchema,
      },
      {
        name: 'User',
        schema: userSchema,
      },
    ]),
  ],
  controllers: [ProductController, UserController],
  providers: [AppService, ProductService, UserService],
})
export class AppModule {}
