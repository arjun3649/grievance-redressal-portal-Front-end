import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

interface Complaint {
  type: string;
  description: string;
  status: string;
  department?: string;
}

@Component({
  standalone: true,
  imports:[ReactiveFormsModule, CommonModule,FormsModule],
  selector: 'app-prm',
  templateUrl: './prm.component.html',
  styleUrls: ['./prm.component.css']
})
export class PrmComponent {
  complaintForm: FormGroup;
  complaints: Complaint[] = [];
  selectedComplaint: Complaint | null = null;

  departments: string[] = [
    'Agriculture',
    'Animal Husbandry, Dairy Development and Fisheries',
    'Co-operation',
    'Cooperation-Marketing',
    'Cooperation-Textile',
    'Energy',
    'Environment',
    'Finance',
    'Food, Civil Supplies and Consumer Protection',
    'GAD Aviation',
    'GAD-Directorate General of Information and Public Relations (DGIPR)',
    'GAD-Election',
    'GAD-Freedom Fighter/ Ex-Servicemen Welfare',
    'GAD-Organization & Methods (O&M)',
    'GAD-Protocol',
    'GAD-Reservation policy',
    'GAD-Services',
    'Higher and Technical Education',
    'Home-Jails',
    'Home-Police',
    'Home-State Excise',
    'Home-Transport & Ports',
    'Housing',
    'Industry',
    'Information Technology',
    'Labour',
    'Law and Judiciary',
    'Marathi Language',
    'Medical Education and Drugs',
    'Minorities Development',
    'Parliamentary Affairs',
    'Person with Disability department',
    'Planning',
    'Planning-Employment Guarantee Scheme (EGS)/NREGA',
    'Public Health',
    'Public Works',
    'Revenue, Registration & Stamps',
    'Revenue-Forest',
    'Revenue-Relief & Rehabilitation',
    'Rural Development',
    'School Education and Sports',
    'Skill Development & Entrepreneurship',
    'Social Justice and Special Assistance',
    'Tourism and Cultural Affairs',
    'Tribal Development',
    'UD1-Urban Planning',
    'UD2-Urban Local Bodies',
    'Vimukta jatis, Nomadic Tribes, Other Backward Classes and Special Backward Classes Welfare Department',
    'Water Conservation',
    'Water Resources',
    'Water Supply and Sanitation',
    'Women and Child Development'
  ];

  constructor(private fb: FormBuilder) {
    this.complaintForm = this.fb.group({
      type: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.complaintForm.valid) {
      const newComplaint: Complaint = {
        type: this.complaintForm.value.type,
        description: this.complaintForm.value.description,
        status: 'Pending'
      };
      this.complaints.push(newComplaint);
      this.complaintForm.reset();
    }
  }

  acceptComplaintFromForm() {
    if (this.complaintForm.valid) {
      const newComplaint: Complaint = {
        type: this.complaintForm.value.type,
        description: this.complaintForm.value.description,
        status: 'Pending'
      };
      this.complaints.push(newComplaint);
      this.selectedComplaint = newComplaint;
      this.complaintForm.reset();
    }
  }

  rejectComplaintFromForm() {
    if (this.complaintForm.valid) {
      const newComplaint: Complaint = {
        type: this.complaintForm.value.type,
        description: this.complaintForm.value.description,
        status: 'Rejected'
      };
      this.complaints.push(newComplaint);
      this.complaintForm.reset();
    }
  }

  acceptComplaint(complaint: Complaint) {
    this.selectedComplaint = complaint;
  }

  rejectComplaint(complaint: Complaint) {
    complaint.status = 'Rejected';
  }

  assignDepartment() {
    if (this.selectedComplaint) {
      this.selectedComplaint.status = 'Accepted';
      this.selectedComplaint = null;
    }
  }

  closeModal() {
    this.selectedComplaint = null;
  }
}
