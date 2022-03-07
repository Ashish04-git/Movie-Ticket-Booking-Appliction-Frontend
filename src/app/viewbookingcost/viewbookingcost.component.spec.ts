import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbookingcostComponent } from './viewbookingcost.component';

describe('ViewbookingcostComponent', () => {
  let component: ViewbookingcostComponent;
  let fixture: ComponentFixture<ViewbookingcostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbookingcostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbookingcostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
