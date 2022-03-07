import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbookingbymovieidComponent } from './viewbookingbymovieid.component';

describe('ViewbookingbymovieidComponent', () => {
  let component: ViewbookingbymovieidComponent;
  let fixture: ComponentFixture<ViewbookingbymovieidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbookingbymovieidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbookingbymovieidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
