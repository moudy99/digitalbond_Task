import {
  Component,
  ElementRef,
  HostListener,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements AfterViewInit {
  isSticky: boolean = false;
  navbarHeight: number = 0;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.navbarHeight = this.el.nativeElement.querySelector('nav').offsetHeight;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.pageYOffset >= this.navbarHeight;
  }
}
