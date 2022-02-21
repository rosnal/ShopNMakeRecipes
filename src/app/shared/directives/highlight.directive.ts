import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor : string = 'white';
  constructor(private elementRef : ElementRef, private renderer : Renderer2) { }
  ngOnInit(): void {
      
  }
  @HostListener('mouseenter') onMouseOver(event : Event){
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','aliceblue');
    this.backgroundColor = 'aliceblue';
  }
  @HostListener('mouseleave') onMouseLeave(event : Event){
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','white');
    this.backgroundColor = 'white';
  }
}
