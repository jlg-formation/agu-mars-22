import { AfterContentInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements AfterContentInit {
  constructor(private elt: ElementRef<HTMLInputElement>) {
    console.log('instantiate autofocus');
    console.log('this.elt.nativeElement: ', this.elt.nativeElement);
  }
  ngAfterContentInit(): void {
    this.elt.nativeElement.select();
  }
}
