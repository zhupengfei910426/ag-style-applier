import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[activePage]'
})
export class CheckPageDirective implements OnChanges{
  
  @Input('activePage') pageName: string;
  @Input() activeClassName: string;
  
  constructor(private el: ElementRef) {
  }

  // listen to the variable: this.pageName;
  ngOnChanges() {
    this.checkPage(this.pageName);
  }
  
  private checkPage(pageName: string) {
    // get url from HTML DOM;
    let url: string = this.el.nativeElement.ownerDocument.URL;
    if (url.toLowerCase().includes(pageName.toLowerCase())){
      this.el.nativeElement.className = this.activeClassName;
    }
  }

}
