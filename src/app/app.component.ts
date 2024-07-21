import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { GroupBoxComponent } from "./group-box/group-box.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgClass ,NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GroupBoxComponent, CarouselComponent, DashboardComponent,NgClass,NgIf,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'grievance-redressal-portal';
  
}
