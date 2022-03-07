import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockseatComponent } from './blockseat.component';

describe('BlockseatComponent', () => {
  let component: BlockseatComponent;
  let fixture: ComponentFixture<BlockseatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockseatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
