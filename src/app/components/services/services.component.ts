import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit, AfterViewInit {
  @ViewChild('servicesTitle') servicesTitle!: ElementRef;
  @ViewChild('servicesContainer') servicesContainer!: ElementRef;
  @ViewChildren('serviceBox') serviceBoxes!: QueryList<ElementRef>;

  services = [
    {
      title: 'BRANDING',
      description:
        'We create unique and memorable brand identities that set your business apart from the competition.',
      icon: 'bi bi-brush',
      class: 'BRANDING',
    },
    {
      title: 'MOBILE APPS',
      description:
        "Develop intuitive and high-performing mobile applications tailored to your audience's needs.",
      icon: 'fas fa-mobile-alt',
      class: 'MOBILE_APPS',
    },
    {
      title: 'WEB DEVELOPMENT',
      description:
        'Build robust and scalable websites that provide an excellent user experience and meet your business needs.',
      icon: 'fas fa-code',
      class: 'WEB_DEVELOPMENT',
    },
    {
      title: 'SOCIAL MEDIA',
      description:
        'Enhance your online presence and engage with your audience through effective social media strategies.',
      icon: 'fas fa-share-alt',
      class: 'SOCIAL_MEDIA',
    },
    {
      title: 'PRODUCTION',
      description:
        "Create engaging multimedia content that effectively communicates your brand's message.",
      icon: 'fas fa-video',
      class: 'PRODUCTION',
    },
    {
      title: 'SMS CAMPAIGNS',
      description:
        'Execute impactful SMS campaigns that drive customer engagement and boost your marketing efforts.',
      icon: 'fas fa-sms',
      class: 'SMS_CAMPAIGNS',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === this.servicesTitle.nativeElement) {
            entry.target.classList.add('animate-title');
          } else if (entry.target === this.servicesContainer.nativeElement) {
            this.animateServices();
          }
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(this.servicesTitle.nativeElement);
    observer.observe(this.servicesContainer.nativeElement);
  }

  animateServices(): void {
    this.serviceBoxes.forEach((box, index) => {
      setTimeout(() => {
        box.nativeElement.classList.add('animate-service');
      }, index * 200);
    });
  }
}
