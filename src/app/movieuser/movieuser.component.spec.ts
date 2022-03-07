import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieuserComponent } from './movieuser.component';

describe('MovieuserComponent', () => {
  let component: MovieuserComponent;
  let fixture: ComponentFixture<MovieuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
