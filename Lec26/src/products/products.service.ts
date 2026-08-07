import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  products = [
    {
      id: 1,
      title: 'Wireless Keyboard',
      description: 'Slim Bluetooth keyboard for laptops',
      price: 89.9,
      stock: 12,
      category: 'electronics',
    },
    {
      id: 2,
      title: 'Gaming Mouse',
      description: 'RGB Mouse',
      price: 59.9,
      stock: 15,
      category: 'electronics',
    },
    {
      id: 3,
      title: 'Notebook',
      description: '200 pages notebook',
      price: 8,
      stock: 60,
      category: 'stationery',
    },
  ];

  create(createProductDto: CreateProductDto) {
    const lastId = this.products[this.products.length - 1]?.id || 0;

    const newProduct = {
      id: lastId + 1,
      ...createProductDto,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((el) => el.id === id);

    if (!product) throw new NotFoundException();

    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const index = this.products.findIndex((el) => el.id === id);

    if (index === -1) throw new BadGatewayException();

    this.products[index] = {
      ...this.products[index],
      ...updateProductDto,
    };

    return this.products[index];
  }

  remove(id: number) {
    const index = this.products.findIndex((el) => el.id === id);

    if (index === -1) throw new BadGatewayException();

    return this.products.splice(index, 1);
  }
}
