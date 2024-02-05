/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Res,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { Product, ProductWithId } from 'src/models/product.model';
import { ProductService } from 'src/services/product/product.service';
import { Response } from 'express';
import { UserService } from 'src/services/user/user.service';

@Controller('api/product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly userService: UserService,
  ) {}

  @Post()
  async insertNewProduct(
    @Body() product: Product,
    @Res() response: Response,
    @Query('userId') param1: string,
  ) {
    try {
      const newProduct = await this.productService.insertNewProduct(
        product,
        param1,
      );
      response.status(HttpStatus.CREATED).json(newProduct);
    } catch (error) {
      response.status(HttpStatus.SERVICE_UNAVAILABLE).send(error.message);
    }
  }

  @Get()
  async getAllProducts(
    @Res() response: Response,
    @Query('userId') param1: string,
  ) {
    try {
      const products = await this.productService.getAllProducts(param1);
      response.status(HttpStatus.OK).json(products);
    } catch (error) {
      response.status(HttpStatus.SERVICE_UNAVAILABLE).send(error.message);
    }
  }

  @Put()
  async updateProduct(
    @Res() response: Response,
    @Body() newProduct: ProductWithId,
  ) {
    try {
      const product = await this.productService.updateProduct(newProduct);
      response.status(HttpStatus.OK).json(product);
    } catch (error) {
      response.status(HttpStatus.SERVICE_UNAVAILABLE).send(error.message);
    }
  }

  @Delete('/:id')
  async deleteProduct(@Param() id: string, @Res() response: Response) {
    try {
      const product = await this.productService.deleteProduct(id);
      response.status(HttpStatus.OK).send(product);
    } catch (error) {
      response.status(HttpStatus.SERVICE_UNAVAILABLE).send(error.message);
    }
  }

  // @Post('/share')
  // async receiveSharedProduct(
  //   @Res() response: Response,
  //   @Body()
  //   body: ProductWithId,
  //   @Query('userEmail') param1: string,
  // ) {
  //   const p: ProductWithId = await this.productService.getProductById(body._id);
  //   const receiver = await this.userService.getUserByEmail(param1);
  //   p.userId.push(receiver);
  //   response.send(p);
  // }
}
