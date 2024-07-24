import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports :[NgIf],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  slides: string[];
  i: number;

  constructor() {
    this.i = 0;
    this.slides = [
      'https://grievances.maharashtra.gov.in/uploads/banner/banner-1662614399.jpg',
      'https://grievances.maharashtra.gov.in/uploads/banner/swarajya-2022-07-e74a3028-5a69-4077-90d9-d58f1abd4cfa-collage-maker-04-jul-2022-12-49-pm-1662615863.jpg',
      'https://grievances.maharashtra.gov.in/uploads/banner/ministry-1691747257.png',
      'https://grievances.maharashtra.gov.in/uploads/banner/xeknath-shinde18-1657185059-1662616001.jpg'
    ];
  }
  
  getSlide() {
    return this.slides[this.i];
  }

  getPrev() {
    this.i == 0 ? (this.i = this.slides.length - 1) : this.i--;
  }

  getNext() {
    this.i < this.slides.length - 1 ? this.i++ : (this.i = 0);
    
  }
}
