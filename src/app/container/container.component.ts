import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FeaturedBrandsComponent } from './featured-brands/featured-brands.component';
import { product } from '../Model/product';
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    ProductListComponent,
    SearchComponent,
    CommonModule,
    ProductDetailComponent,
    FeaturedBrandsComponent,
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  searchText = '';
  searchValue(event: any) {
    this.searchText = event;
  }
  @ViewChild('productListComponent') productListComponent: ProductListComponent;
  onCloseProductDetail() {
    this.productListComponent.selectedProduct=null;
  }

  NewArrivalBrands: string[] = ['Nike', 'Adidas', 'Puma', 'Nizza'];
}
