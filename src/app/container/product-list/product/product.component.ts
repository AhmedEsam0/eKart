import { Component, ElementRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { product } from '../../../Model/product';
import { DisableProductDirective } from '../../../CustomDirectives/disable-product.directive';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,DisableProductDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() prod: any;
  @Input() product: product;
  toggleIsInWatchlist(product:product) {
    product.is_in_watchlist = !product.is_in_watchlist;
  }
}
