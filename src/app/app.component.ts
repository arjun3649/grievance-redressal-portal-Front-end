import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GroupBoxComponent } from "./group-box/group-box.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgClass ,NgIf} from '@angular/common';
import { GrievanceFormComponent } from "./grievance-form/grievance-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GroupBoxComponent, CarouselComponent, DashboardComponent, NgClass, NgIf, GrievanceFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'grievance-redressal-portal';
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Menu toggled:', this.isMenuOpen); // For debugging
  }
}
