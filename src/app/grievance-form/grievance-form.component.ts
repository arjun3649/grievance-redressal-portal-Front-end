import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-grievance-form',
  templateUrl: './grievance-form.component.html',
  styleUrls: ['./grievance-form.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,

})
export class GrievanceFormComponent implements OnInit {
  
  captchaQuestion: string = '';
  captchaAnswer: number = 0;
  captchaError: string = '';
  grievanceForm: FormGroup;

  readonly options = {
    state: ['Maharashtra'],
    city: ['Pune'],
    district: ['Pune'],
    taluka: ['-- Select --', 'Ambegaon', 'Baramati', 'Bhor', 'Daund', 'Haveli', 'Indapur', 'Junnar', 'Khed', 'Maval', 'Mulshi', 'Pimpri Chinchwad', 'Pune City', 'Purandar', 'Shirur', 'Velhe'],
    village: ['Pune'],
    grievanceDistrict: ['Pune'],
    grievanceTaluka: ['-- Select --', 'Ambegaon', 'Baramati', 'Bhor', 'Daund', 'Haveli', 'Indapur', 'Junnar', 'Khed', 'Maval', 'Mulshi', 'Pimpri Chinchwad', 'Pune City', 'Purandar', 'Shirur', 'Velhe'],
    grievanceVillage: ['Pune'],
    departments: ['-- Select --', 
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
      'Vimukta jatis, Nomadic Tribes, Other Backword Classes and Special Backward Classes Welfare Department',
      'Water Conservation',
      'Water Resources',
      'Water Supply and Sanitation',
      'Women and Child Development'
    ],
    pincodes: [
      { value: '', text: '-- Select --' },
      { value: '411014', text: '411014 (9 DRD B.O)' },
      { value: '411004', text: '411004 (A.R. Shala S.O)' },
      { value: '411032', text: '411032 (Airport S.O (Pune))' },
      { value: '411035', text: '411035 (Akurdi S.O)' },
      { value: '411003', text: '411003 (Ammunition Factory Khadki S.O)' },
      { value: '411051', text: '411051 (Anandnagar S.O (Pune))' },
      { value: '411021', text: '411021 (Armament S.O)' },
      { value: '411007', text: '411007 (Aundh T.S. S.O)' },
      { value: '411002', text: '411002 (Bajirao Road S.O)' },
      { value: '411008', text: '411008 (Baner Road S.O)' },
      { value: '411042', text: '411042 (Bhavani Peth S.O)' },
      { value: '411026', text: '411026 (Bhosari I.E. S.O)' },
      { value: '411039', text: '411039 (Bhosarigoan S.O)' },
      { value: '411038', text: '411038 (Bhusari Colony S.O)' },
      { value: '411037', text: '411037 (Bibvewadi S.O)' },
      { value: '411020', text: '411020 (Botanical Garden S.O (Pune))' },
      { value: '411001', text: '411001 (C D A (O) S.O)' },
      { value: '411031', text: '411031 (C M E S.O)' },
      { value: '411019', text: '411019 (Chinchwad East S.O)' },
      { value: '411033', text: '411033 (Chinchwadgaon S.O)' },
      { value: '411005', text: '411005 (Congress House Road S.O)' },
      { value: '411012', text: '411012 (Dapodi Bazar S.O)' },
      { value: '411004', text: '411004 (Deccan Gymkhana S.O)' },
      { value: '411043', text: '411043 (Dhankawadi S.O)' },
      { value: '411015', text: '411015 (Dhanori B.O)' },
      { value: '411015', text: '411015 (Dighi Camp S.O)' },
      { value: '411001', text: '411001 (Dr.B.A. Chowk S.O)' },
      { value: '411014', text: '411014 (Dukirkline S.O)' },
      { value: '411038', text: '411038 (Ex. Serviceman Colony S.O)' },
      { value: '411004', text: '411004 (Film Institute S.O)' },
      { value: '411007', text: '411007 (Ganeshkhind S.O)' },
      { value: '411042', text: '411042 (Ghorpade Peth S.O)' },
      { value: '411001', text: '411001 (Ghorpuri Bazar S.O)' },
      { value: '411028', text: '411028 (Gondhale Nagar S.O)' },
      { value: '411016', text: '411016 (Govt. Polytechnic S.O)' },
      { value: '411042', text: '411042 (Guruwar Peth S.O)' },
      { value: '411003', text: '411003 (H.E. Factory S.O)' },
      { value: '411028', text: '411028 (Hadapsar S.O)' },
      { value: '411013', text: '411013 (Hadpsar I.E. S.O)' },
      { value: '411032', text: '411032 (Iaf Station S.O)' },
      { value: '411026', text: '411026 (Indrayaninagar S.O)' },
      { value: '411017', text: '411017 (Kalewadi B.O)' },
      { value: '411052', text: '411052 (Karvenagar S.O)' },
      { value: '411034', text: '411034 (Kasarwadi S.O)' },
      { value: '411011', text: '411011 (Kasba Peth S.O)' },
      { value: '411046', text: '411046 (Katraj S.O)' },
      { value: '411024', text: '411024 (Khadakwasla R.S. S.O)' },
      { value: '411003', text: '411003 (Khadki Bazar S.O)' },
      { value: '411048', text: '411048 (Khondhwa KH B.O)' },
      { value: '411048', text: '411048 (Kondhwa BK B.O)' },
      { value: '411048', text: '411048 (Kondhwa Lh B.O)' },
      { value: '411038', text: '411038 (Kothrud S.O)' },
      { value: '411047', text: '411047 (Lohogaon S.O)' },
      { value: '411030', text: '411030 (Lokmanyanagar S.O)' },
      { value: '411011', text: '411011 (Mangalwar Peth S.O (Pune))' },
      { value: '411037', text: '411037 (Market Yard S.O (Pune))' },
      { value: '411018', text: '411018 (Masulkar Colony S.O)' },
      { value: '411016', text: '411016 (Model Colony S.O)' },
      { value: '411060', text: '411060 (Mohamadwadi S.O)' },
      { value: '411048', text: '411048 (N I B M S.O)' },
      { value: '411008', text: '411008 (N.C.L. Pune S.O)' },
      { value: '411023', text: '411023 (N.D.A. Khadakwasla S.O)' },
      { value: '411045', text: '411045 (N.I.A. S.O)' },
      { value: '411001', text: '411001 (N.W. College S.O)' },
      { value: '411002', text: '411002 (Nana Peth S.O)' },
      { value: '411030', text: '411030 (Narayan Peth S.O)' },
      { value: '411052', text: '411052 (Navsahyadri S.O)' },
      { value: '411044', text: '411044 (P.C.N.T. S.O)' },
      { value: '411009', text: '411009 (Parvati Gaon S.O)' },
      { value: '411017', text: '411017 (Pimpri Colony S.O)' },
      { value: '411018', text: '411018 (Pimpri P F S.O)' },
      { value: '411017', text: '411017 (Pimpri Waghire S.O)' },
      { value: '411033', text: '411033 (Punawale B.O)' },
      { value: '411001', text: '411001 (Pune Cantt East S.O)' },
      { value: '411002', text: '411002 (Pune City H.O)' },
      { value: '411001', text: '411001 (Pune H.O)' },
      { value: '411001', text: '411001 (Pune New Bazar S.O)' },
      { value: '411020', text: '411020 (Range Hills S.O)' },
      { value: '411030', text: '411030 (Rashtra Bhasha Bhavan S.O)' },
      { value: '411011', text: '411011 (Rasta Peth S.O)' },
      { value: '411002', text: '411002 (Raviwar Peth S.O)' },
      { value: '411030', text: '411030 (S.P. College S.O)' },
      { value: '411005', text: '411005 (S.S.C.Exam Board S.O)' },
      { value: '411001', text: '411001 (Sachapir Street S.O)' },
      { value: '411030', text: '411030 (Sadashiv Peth S.O)' },
      { value: '411037', text: '411037 (Salisbury Park S.O)' },
      { value: '411027', text: '411027 (Sangavi S.O)' },
      { value: '411028', text: '411028 (Sasanenagar S.O)' },
      { value: '411030', text: '411030 (Shaniwar Peth S.O (Pune))' },
      { value: '411016', text: '411016 (Shivaji Housing Society S.O)' },
      { value: '411005', text: '411005 (Shivajinagar S.O (Pune))' },
      { value: '411002', text: '411002 (Shukrawar Peth S.O (Pune))' },
      { value: '411022', text: '411022 (Srpf S.O)' },
      { value: '411042', text: '411042 (Swargate Chowk S.O)' },
      { value: '411037', text: '411037 (T.V. Nagar S.O)' },
      { value: '411033', text: '411033 (Thathawade B.O)' },
      { value: '411033', text: '411033 (Thergaon B.O)' },
      { value: '411041', text: '411041 (Vadgaon Budruk S.O)' },
      { value: '411014', text: '411014 (Vadgaon Sheri S.O)' },
      { value: '411047', text: '411047 (Vadgaon Shinde B.O)' },
      { value: '411032', text: '411032 (Vidyanagar S.O (Pune))' },
      { value: '411014', text: '411014 (Viman nagar S.O)' },
      { value: '411057', text: '411057 (Wakad B.O)' },
      { value: '411040', text: '411040 (Wanowarie S.O)' },
      { value: '411058', text: '411058 (Warje S.O)' },
      { value: '411044', text: '411044 (Yamunanagar S.O)' },
      { value: '411006', text: '411006 (Yerwada S.O)' }
    ],
    occupations: [
      // { value: '', text: 'Please select occupation' },
      { value: '', text: '-- Select --' },
      { value: '1', text: 'Artist' },
      { value: '2', text: 'Business' },
      { value: '3', text: 'Doctor' },
      { value: '4', text: 'Engineer' },
      { value: '5', text: 'Farm Wages' },
      { value: '6', text: 'Farmer' },
      { value: '7', text: 'Government Employee' },
      { value: '8', text: 'Hardware Professional' },
      { value: '10', text: 'Housewife' },
      { value: '11', text: 'Industrialist' },
      { value: '12', text: 'Lawyer' },
      { value: '13', text: 'Nurse' },
      { value: '14', text: 'Other' },
      { value: '15', text: 'Private Service' },
      { value: '16', text: 'Professor' },
      { value: '22', text: 'Reporter' },
      { value: '9', text: 'Software Professional' },
      { value: '17', text: 'Student' },
      { value: '18', text: 'Teacher' },
      { value: '19', text: 'Wages' },
      { value: '20', text: 'Worker' },
      { value: '21', text: 'Writer' }
    ]
  };

  constructor(private fb: FormBuilder) {
    this.grievanceForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: [''],
      dob: [''],
      gender: ['', Validators.required],
      occupation: [''],
      address: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      taluka: ['', Validators.required],
      village: ['', Validators.required],
      pincode: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      grievanceDistrict: ['', Validators.required],
      grievanceTaluka: ['', Validators.required],
      grievanceVillage: ['', Validators.required],
      department: ['', Validators.required],
      // office: ['', ],
      // natureOfGrievance: ['', Validators.required],
      grievanceDetails: ['', [Validators.required, Validators.maxLength(3000)]],
      captchaAnswer: ['', Validators.required],
      // image: [null],
      document: [null]
    });
  }

  ngOnInit(): void {
    this.generateCaptcha();
  }

  generateCaptcha(): void {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    this.captchaQuestion = `${num1} + ${num2}`;
    this.captchaAnswer = num1 + num2;
  }
  

  onSubmit(): void {
    if (this.grievanceForm.valid) {
      const userCaptchaAnswer = this.grievanceForm.get('captchaAnswer')?.value;
      if (userCaptchaAnswer != this.captchaAnswer) {
        this.captchaError = 'Incorrect captcha answer. Please try again.';
        this.generateCaptcha();  // Generate a new captcha if the answer is incorrect
        return;
      }

      this.captchaError = '';
      console.log(this.grievanceForm.value);
    }
  }

  resetForm(): void {
    this.grievanceForm.reset();
    this.generateCaptcha(); // Regenerate captcha for the reset form
  }

  onFileChange(event: Event, controlName: string): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.grievanceForm.patchValue({
        [controlName]: file
      });
    }
  }
}
