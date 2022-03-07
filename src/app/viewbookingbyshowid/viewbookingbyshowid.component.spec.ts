import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbookingbyshowidComponent } from './viewbookingbyshowid.component';

describe('ViewbookingbyshowidComponent', () => {
  let component: ViewbookingbyshowidComponent;
  let fixture: ComponentFixture<ViewbookingbyshowidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbookingbyshowidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbookingbyshowidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
