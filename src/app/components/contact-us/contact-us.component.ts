import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent implements OnInit, AfterViewInit {
  isVisible = false;
  contactForm!: FormGroup;

  @ViewChild('sectionTitle') sectionTitle!: ElementRef;
  @ViewChild('sectionContainer') sectionContainer!: ElementRef;

  constructor(private el: ElementRef, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngAfterViewInit(): void {
    this.observeVisibility();
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
      { threshold: 0.1 }
    );

    observer.observe(this.el.nativeElement);
  }
  onSubmit() {
    if (this.contactForm.valid) {
      Swal.fire({
        icon: 'success',
        title: 'We received your email!',
        text: 'We will contact you soon 😊',
      });
      this.contactForm.reset();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all required fields correctly.',
      });
    }
  }
}
