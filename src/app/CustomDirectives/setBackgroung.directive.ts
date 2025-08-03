import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackground]',
  standalone: true,
})
export class setBackground implements OnInit {
  // @Input('backColor') backColor: string = '#36454f';
  // @Input() setTextColor: string = 'white';
  @Input('setBackground') setBackgroundAndTextColors: {
    backgroundColor: string;
    color: string;
  } = { backgroundColor: '#36454f', color: 'White' };
  constructor(
    private elementRefrence: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    const element: HTMLElement = this.elementRefrence.nativeElement;

    // element.style.backgroundColor = '#36454f';
    // element.style.color = 'white';
    this.renderer.setStyle(
      element,
      'backgroundColor',
      this.setBackgroundAndTextColors.backgroundColor
    );
    this.renderer.setStyle(
      element,
      'color',
      this.setBackgroundAndTextColors.color
    );
  }
}
