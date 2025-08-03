import {
  Directive,
  ElementRef,
  HostBinding,
  Renderer2,
  HostListener,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true,
})
export class AppHoverDirective {
  constructor(
    private elementReference: ElementRef,
    private renderer: Renderer2
  ) {}

}
