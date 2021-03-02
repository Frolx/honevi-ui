import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { OnboardCompanyComponent } from './company-details/onboard-company.component';
import { OnboardigInitComponent } from './company-onboard/onboardig-init.component';
import { OnboardigProfileComponent } from './company-profile/onboardig-profile.component';
import { OnboardigReadyComponent } from './company-ready/onboardig-ready.component';
import { AuthGuardService as AuthGuard } from './_services/auth-guard.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserReadyComponent } from './user-ready/user-ready.component';

export const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'onboard/company', component: OnboardCompanyComponent},
  { path: 'onboard/company/init', component: OnboardigInitComponent},
  { path: 'onboard/company/profile', component: OnboardigProfileComponent, canActivate: [AuthGuard]},
  { path: 'onboard/company/ready', component: OnboardigReadyComponent, canActivate: [AuthGuard]},
  { path: 'onboard/user/init', component: UserDetailsComponent},
  { path: 'onboard/user/profile', component: UserProfileComponent},
  { path: 'onboard/user/ready', component: UserReadyComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
