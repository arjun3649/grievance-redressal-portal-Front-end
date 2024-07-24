import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-group-box',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './group-box.component.html',
  styleUrl: './group-box.component.css'
})
export class GroupBoxComponent {
  constructor(private router:Router) {
    
  }
  redirect()
  {
    this.router.navigate(['/trackgrievance'])
  }
  navigate()
  {
    this.router.navigate(['/grievanceform'])
  }

}
