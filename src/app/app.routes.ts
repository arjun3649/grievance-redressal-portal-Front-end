import { Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    {path:'',component:HomepageComponent},
    {path:'about',component:AboutmeComponent}
];
