import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmboardigInitComponent } from './omboardig-init.component';

describe('OmboardigInitComponent', () => {
  let component: OmboardigInitComponent;
  let fixture: ComponentFixture<OmboardigInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmboardigInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmboardigInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
