import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardigInitComponent } from './onboardig-init.component';

describe('OmboardigInitComponent', () => {
  let component: OnboardigInitComponent;
  let fixture: ComponentFixture<OnboardigInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardigInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardigInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
