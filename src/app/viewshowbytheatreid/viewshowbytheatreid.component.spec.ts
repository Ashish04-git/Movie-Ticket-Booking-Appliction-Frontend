import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewshowbytheatreidComponent } from './viewshowbytheatreid.component';

describe('ViewshowbytheatreidComponent', () => {
  let component: ViewshowbytheatreidComponent;
  let fixture: ComponentFixture<ViewshowbytheatreidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewshowbytheatreidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewshowbytheatreidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
