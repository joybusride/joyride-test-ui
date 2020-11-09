import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatgridComponent } from './seatgrid.component';

describe('SeatgridComponent', () => {
  let component: SeatgridComponent;
  let fixture: ComponentFixture<SeatgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
