import { Component } from '@angular/core';
import { CatalogService } from '../service/catalog-service';

@Component({
  selector: 'app-category-product',
  standalone: false,
  templateUrl: './category-product.html',
  styleUrl: './category-product.css',
})
export class CategoryProduct {
  categories: any[] = [];

  // Tiêm CatalogService vào Component
  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    // Gọi hàm từ service gán vào biến categories khi component vừa chạy
    this.categories = this.catalogService.getCategories();
  }
}
