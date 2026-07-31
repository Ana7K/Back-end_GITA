import { Injectable } from '@nestjs/common';

@Injectable()
export class WishlistService {
  wishlist = {
    ge: ['მანქანა', 'სახლი', 'ლეპტოპი'],
    en: ['Car', 'House', 'Laptop'],
    it: ['Macchina', 'Casa', 'Portatile'],
    ger: ['Auto', 'Haus', 'Laptop'],
  };

  getWishlist(lang: string) {
    return this.wishlist[lang];
  }
}
