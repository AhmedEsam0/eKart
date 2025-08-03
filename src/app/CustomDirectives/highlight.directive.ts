import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private elementReference:ElementRef,private renderer:Renderer2) {}

  @HostListener('mouseover') onHover(){
    this.renderer.addClass(this.elementReference.nativeElement,'highlight')
  }
  @HostListener('mouseout') onMouseOut(){
    this.renderer.removeClass(this.elementReference.nativeElement,'highlight')
  }

}
