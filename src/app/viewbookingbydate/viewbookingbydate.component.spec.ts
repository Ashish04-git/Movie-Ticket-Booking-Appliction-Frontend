import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbookingbydateComponent } from './viewbookingbydate.component';

describe('ViewbookingbydateComponent', () => {
  let component: ViewbookingbydateComponent;
  let fixture: ComponentFixture<ViewbookingbydateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbookingbydateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbookingbydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
