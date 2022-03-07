import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewshowsComponent } from './viewshows.component';

describe('ViewshowsComponent', () => {
  let component: ViewshowsComponent;
  let fixture: ComponentFixture<ViewshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewshowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
