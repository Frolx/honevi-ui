import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReadyComponent } from './user-ready.component';

describe('UserReadyComponent', () => {
  let component: UserReadyComponent;
  let fixture: ComponentFixture<UserReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReadyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
