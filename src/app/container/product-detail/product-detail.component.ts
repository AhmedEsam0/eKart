import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  ViewChild,
  Output,
  EventEmitter,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { product } from '../../Model/product';
import { AppHoverDirective } from '../../CustomDirectives/app-hover.directive';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [CommonModule, AppHoverDirective],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  constructor(private renderer: Renderer2) {}
  textColor: string = 'Yellow';
  @Input() selectedProduct: product | null;
  @Output() closeEvent = new EventEmitter<void>();
  close() {
    this.closeEvent.emit();
  }





  selectedSize: number;
  sizeSelected(size:number ) {
    //console.log(element);
    this.selectedSize = size;
    //console.log(this.selectedSize);
  }
  selectedColor: string = '';

selectColor(color: string): void {
  this.selectedColor = color;
}

}
