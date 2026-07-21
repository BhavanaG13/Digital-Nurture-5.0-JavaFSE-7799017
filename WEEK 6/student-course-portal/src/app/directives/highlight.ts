import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class Highlight {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#eef6ff');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}
