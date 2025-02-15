import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './admin/register/register.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { FarmerdashboardComponent } from './farmer/farmerdashboard/farmerdashboard.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'navbar', component:NavbarComponent},
    {path: 'footer', component:FooterComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'admindashboard', component:AdmindashboardComponent},
    {path: 'farmerdashboard', component:FarmerdashboardComponent}
]