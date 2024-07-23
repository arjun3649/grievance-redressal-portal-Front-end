// track-grievance.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-track-grievance',
  templateUrl: './track-grievance.component.html',
  styleUrls: ['./track-grievance.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class TrackGrievanceComponent {
  grievanceId: string = ''; // Initialize with a default value
}
