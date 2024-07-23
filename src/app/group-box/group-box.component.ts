import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-box',
  standalone: true,
  imports: [],
  templateUrl: './group-box.component.html',
  styleUrl: './group-box.component.css'
})
export class GroupBoxComponent {
  constructor(private router: Router) { }
  redirect()
  {
    this.router.navigate(['/grievanceform'])
  }
  navigate()
  {
    this.router.navigate(['/trackgrievance'])
  }

}
