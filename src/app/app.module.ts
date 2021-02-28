import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { OnboardCompanyComponent } from './company-details/onboard-company.component';
import { OmboardigInitComponent } from './company-onboard/omboardig-init.component';
import { OnboardigProfileComponent } from './company-profile/onboardig-profile.component';
import { OnboardigReadyComponent } from './company-ready/onboardig-ready.component';
import { AuthGuardService } from './_services/auth-guard.service';
import { AuthService } from './_services/auth.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserReadyComponent } from './user-ready/user-ready.component';
import { VendorOnboardComponent } from './vendor-onboard/vendor-onboard.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';
import { VendorReadyComponent } from './vendor-ready/vendor-ready.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    OnboardCompanyComponent,
    OmboardigInitComponent,
    OnboardigProfileComponent,
    OnboardigReadyComponent,
    UserDetailsComponent,
    UserProfileComponent,
    UserReadyComponent,
    VendorOnboardComponent,
    VendorProfileComponent,
    VendorReadyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
