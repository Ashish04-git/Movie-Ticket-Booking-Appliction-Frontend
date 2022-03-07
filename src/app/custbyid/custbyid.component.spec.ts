import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustbyidComponent } from './custbyid.component';

describe('CustbyidComponent', () => {
  let component: CustbyidComponent;
  let fixture: ComponentFixture<CustbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
