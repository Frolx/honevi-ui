import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorReadyComponent } from './vendor-ready.component';

describe('VendorReadyComponent', () => {
  let component: VendorReadyComponent;
  let fixture: ComponentFixture<VendorReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorReadyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
