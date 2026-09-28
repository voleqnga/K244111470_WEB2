import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  productsImage = [
    { ProductId: 'p1', ProductName: 'Coca', Price: 100, Image: '/assets/h1.png' },
    { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: '/assets/h2.png' },
    { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: '/assets/h3.png' },
  ];

  getProductsWithImages() {
    return this.productsImage;
  }

  getProductDetail(id: string) {
    return this.productsImage.find((product) => product.ProductId === id);
  }
}
