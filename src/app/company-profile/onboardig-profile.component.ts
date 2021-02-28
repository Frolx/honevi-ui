import { formatCurrency } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OnboardingService } from '../_services/onboarding.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-onboardig-profile',
  templateUrl: './onboardig-profile.component.html',
  styleUrls: ['./onboardig-profile.component.css']
})
export class OnboardigProfileComponent implements OnInit {
  form: any = {
    icon: '',
    name: '',
    cui : ''
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
    this.onboardingService.postSetCompanyProfile(this.form.name, this.form.cui, this.form.icon).subscribe(
      (data: HttpResponse<any>) => {
        this._router.navigateByUrl('onboard/company/ready')
      },
      err => {
        console.log(err.error.message)

      }
    )
  }

}
