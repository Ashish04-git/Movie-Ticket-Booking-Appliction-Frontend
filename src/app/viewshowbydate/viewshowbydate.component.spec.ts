import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewshowbydateComponent } from './viewshowbydate.component';

describe('ViewshowbydateComponent', () => {
  let component: ViewshowbydateComponent;
  let fixture: ComponentFixture<ViewshowbydateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewshowbydateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewshowbydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
