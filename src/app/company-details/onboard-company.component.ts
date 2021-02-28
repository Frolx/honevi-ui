import { Component, Input, OnInit} from '@angular/core';
import { OnboardingService } from '../_services/onboarding.service';
import { HttpResponse } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-onboard-company',
  templateUrl: './onboard-company.component.html'
})
export class OnboardCompanyComponent implements OnInit {

  form: any  = {
    email : null
  }
  onboardingStarted = false;
  ngOnInit(): void {

  }

  constructor(private onboardingService: OnboardingService) {}

  onSubmit(): void {

    const email = this.form.email;
    const type  = "COMPANY";

    this.onboardingService.postOnboardCompany(email, type).subscribe(
      (data: HttpResponse<any>) =>  {
        this.onboardingStarted = true;
      }
    )

    // const { email, password } = this.form;

    // this.authService.login(email, password).subscribe(
    //   (data: HttpResponse<any>) => {
    //     console.log(data.headers)
    //     this.tokenStorage.saveToken(data.headers.get("Authorization") || "");
    //     this.tokenStorage.saveUser(data);

    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     // this.roles = this.tokenStorage.getUser().roles;
    //     this.roles = this.tokenStorage.getToken() || "osdko"
    //     this.reloadPage();
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // );
  }
}
