import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardigProfileComponent } from './onboardig-profile.component';

describe('OnboardigProfileComponent', () => {
  let component: OnboardigProfileComponent;
  let fixture: ComponentFixture<OnboardigProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardigProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardigProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
