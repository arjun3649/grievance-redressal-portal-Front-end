import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgClass } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { GroupBoxComponent } from '../group-box/group-box.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgIf, NgClass, DashboardComponent, GroupBoxComponent, CarouselComponent, RouterLink, NavbarComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  

}
