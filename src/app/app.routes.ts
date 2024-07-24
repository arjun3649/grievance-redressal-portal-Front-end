import { Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GrievanceFormComponent } from './grievance-form/grievance-form.component';
import { TrackGrievanceComponent } from './track-grievance/track-grievance.component';
import { VerificationFormComponent } from './verification-form/verification-form.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
    {path:'Home',component:HomepageComponent},
    { path: 'about', component: AboutmeComponent },
    { path: 'grievanceform', component: GrievanceFormComponent },
    { path: 'trackgrievance', component: TrackGrievanceComponent },
    { path: "verification", component: VerificationFormComponent},
  { path: "otp", component: OtpVerificationComponent},
   { path: "registration", component: RegistrationFormComponent},
   { path: 'login', component: LoginComponent},

];
