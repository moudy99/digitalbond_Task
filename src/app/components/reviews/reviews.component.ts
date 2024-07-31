import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit, AfterViewInit {
  manImage = '../../../assets/Images/review/man.png';
  womanImage = '../../../assets/Images/review/women.png';
  isVisible = false;

  reviews = [
    {
      isWoman: true,
      message:
        'Very detailed and knowledgeable, they have managed to reduce my cost per click from FB and google by 100% compared to my old agency',
      name: 'Menna',
      job: 'Sales Director',
    },
    {
      isWoman: true,
      message:
        'Competent, professional and engaged team on managerial and individual levels.',
      name: 'Nada',
      job: 'CTO',
    },
    {
      isWoman: false,
      message:
        'A fantastic agency that develops strategic creative and technology to deliver on our business objectives.',
      name: 'Mostafa',
      job: 'Business Owner',
    },
  ];

  @ViewChild('sectionTitle') sectionTitle!: ElementRef;
  @ViewChild('sectionContainer') sectionContainer!: ElementRef;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.observeVisibility();
  }

  getImage(isWoman: boolean): string {
    return isWoman ? this.womanImage : this.manImage;
  }

  observeVisibility() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            this.sectionTitle.nativeElement.classList.add('animate-title');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(this.el.nativeElement);
  }
}
