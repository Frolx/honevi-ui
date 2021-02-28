import { Component, OnInit } from '@angular/core';
import { OnboardingService } from '../_services/onboarding.service';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-omboardig-init',
  templateUrl: './omboardig-init.component.html',
  styleUrls: ['./omboardig-init.component.css']
})
export class OmboardigInitComponent implements OnInit {
  form: any = {
    password: null,
    rpassword: null,
    email: null
  };

  roles: string = "";
  secret: string = "";
  isLoggedIn = false;
  isLoginFailed = false;

  constructor(private onboardingService: OnboardingService,
    private activatedRoute: ActivatedRoute,
    private tokenStorage: TokenStorageService,
    private _router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      let email = params['email'];
      let secret = params['secret'];
      this.secret = secret
      this.form.email = email
      console.log(email);// OUTPUT 1534
      console.log(secret);// OUTPUT red
    });
  }

  onSubmit(): void {
    this.onboardingService.postActivateCompany(this.form.email, this.form.password).subscribe(
      (data: HttpResponse<any>) => {
        const token = data.headers.get("Authorization");
        this.tokenStorage.saveToken( token || "");
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // this.roles = this.tokenStorage.getUser().roles;
        this.roles = this.tokenStorage.getToken() || "osdko"
        console.log("AUTH DONE " + token)
        this._router.navigateByUrl('onboard/profile')
      },
      err => {
        console.log(err.error.message)

      }
    )
  }

}
