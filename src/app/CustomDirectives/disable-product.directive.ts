import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[disableProduct]',
  standalone: true,
})
export class DisableProductDirective {
  constructor(
    private elementReference: ElementRef,
    private renderer: Renderer2
  ) {}

  @Input() set disableProduct(disable: boolean) {
    if (disable) {
      this.renderer.addClass(
        this.elementReference.nativeElement,
        'disable-out-of-stock-product'
      );
    } else {
      this.renderer.removeClass(
        this.elementReference.nativeElement,
        'disable-out-of-stock-product'
      );
    }
  }
}
