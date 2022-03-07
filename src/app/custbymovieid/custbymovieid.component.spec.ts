import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustbymovieidComponent } from './custbymovieid.component';

describe('CustbymovieidComponent', () => {
  let component: CustbymovieidComponent;
  let fixture: ComponentFixture<CustbymovieidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustbymovieidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustbymovieidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
