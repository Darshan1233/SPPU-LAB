import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'register', component:RegisterComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'showuser', component:ShowuserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
