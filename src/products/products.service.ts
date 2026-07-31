import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateProductDto } from './DTO/createProduct.dto';
import { UpdateProductDto } from './DTO/updateProduct.dto';

@Injectable()
export class ProductsService {
  products: CreateProductDto[] = [];

  create(product: CreateProductDto) {
    const lastId = this.products[this.products.length - 1]?.id || 0;

    const newProduct = {
      id: lastId + 1,
      name: product.name,
      description: product.description,
      price: product.price,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  findAll(query: any) {
    const { id, name, description, price, page, limit } = query;

    let result = this.products;

    if (id) {
      result = result.filter((product) => product.id === Number(id));
    }

    if (name) {
      result = result.filter((product) => product.name === name);
    }

    if (description) {
      result = result.filter((product) => product.description === description);
    }

    if (price) {
      result = result.filter((product) => product.price === Number(price));
    }

    // Pagination
    if (page && limit) {
      const start = (Number(page) - 1) * Number(limit);

      const end = start + Number(limit);

      result = result.slice(start, end);
    }

    return result;
  }

  findOne(id: number) {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      throw new BadRequestException();
    }

    return product;
  }

  update(id: number, data: UpdateProductDto) {
    const index = this.products.findIndex((product) => product.id === id);

    if (index === -1) {
      throw new NotFoundException();
    }

    this.products[index] = {
      ...this.products[index],

      name: data.name ?? this.products[index].name,

      description: data.description ?? this.products[index].description,

      price: data.price ?? this.products[index].price,
    };

    return this.products[index];
  }

  delete(id: number, headers: any) {
    if (!headers || headers.password !== 'secret') {
      throw new BadRequestException();
    }

    const index = this.products.findIndex((product) => product.id === id);

    if (index === -1) {
      throw new NotFoundException();
    }

    return this.products.splice(index, 1);
  }
}
