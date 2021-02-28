import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { OnboardCompanyComponent } from './onboard-company/onboard-company.component';
import { OmboardigInitComponent } from './omboardig-init/omboardig-init.component';
import { OnboardigProfileComponent } from './onboardig-profile/onboardig-profile.component';
import { OnboardigReadyComponent } from './onboardig-ready/onboardig-ready.component';

const routes: Routes = [
  { path: 'onboard', component: OnboardCompanyComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'onboard/init', component: OmboardigInitComponent},
  { path: 'onboard/profile', component: OnboardigProfileComponent},
  { path: 'onboard/ready', component: OnboardigReadyComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
