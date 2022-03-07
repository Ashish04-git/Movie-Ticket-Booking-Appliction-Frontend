import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteseatComponent } from './deleteseat.component';

describe('DeleteseatComponent', () => {
  let component: DeleteseatComponent;
  let fixture: ComponentFixture<DeleteseatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteseatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
