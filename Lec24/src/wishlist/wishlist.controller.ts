import { Controller, Get, Query, DefaultValuePipe } from '@nestjs/common';
import { WishlistService } from './wishlist.service';

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Get()
  getWishlist(@Query('lang', new DefaultValuePipe('en')) lang: string) {
    return this.wishlistService.getWishlist(lang);
  }
}