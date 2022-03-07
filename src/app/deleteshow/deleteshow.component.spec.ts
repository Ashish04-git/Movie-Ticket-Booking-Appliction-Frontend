import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteshowComponent } from './deleteshow.component';

describe('DeleteshowComponent', () => {
  let component: DeleteshowComponent;
  let fixture: ComponentFixture<DeleteshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
