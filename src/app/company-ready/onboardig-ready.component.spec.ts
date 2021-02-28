import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardigReadyComponent } from './onboardig-ready.component';

describe('OnboardigReadyComponent', () => {
  let component: OnboardigReadyComponent;
  let fixture: ComponentFixture<OnboardigReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardigReadyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardigReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
