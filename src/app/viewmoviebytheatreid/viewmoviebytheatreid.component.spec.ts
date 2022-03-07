import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmoviebytheatreidComponent } from './viewmoviebytheatreid.component';

describe('ViewmoviebytheatreidComponent', () => {
  let component: ViewmoviebytheatreidComponent;
  let fixture: ComponentFixture<ViewmoviebytheatreidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmoviebytheatreidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmoviebytheatreidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
