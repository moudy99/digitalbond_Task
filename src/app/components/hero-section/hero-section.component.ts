import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const options = {
      strings: [
        'A digital marketing agency that mixes and matches creativity and commitment to help brands go beyond the limit.',
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    };

    new Typed('#typed-description', options);
  }
}
