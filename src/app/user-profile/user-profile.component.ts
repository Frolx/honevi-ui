import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from '../_services/onboarding.service';

@Component({
  selector: 'app-user-onboard',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  form: any = {
    icon: '',
    name: '',
    lastname : ''
  };

  constructor(private onboardingService: OnboardingService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSelectFile(event: any) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.form.icon = event.target != null ? event.target.result : "";
      }
    }
  }

  onSubmit() {
    this.onboardingService.postSetUserProfile(this.form.name, this.form.lastname, this.form.icon).subscribe(
      (data: HttpResponse<any>) => {
        this._router.navigateByUrl('onboard/user/ready')
      },
      err => {
        console.log(err.error.message)

      }
    )
  }
}
