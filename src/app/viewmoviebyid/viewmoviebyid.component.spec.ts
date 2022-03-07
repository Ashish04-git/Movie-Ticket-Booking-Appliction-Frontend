import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmoviebyidComponent } from './viewmoviebyid.component';

describe('ViewmoviebyidComponent', () => {
  let component: ViewmoviebyidComponent;
  let fixture: ComponentFixture<ViewmoviebyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmoviebyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmoviebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
