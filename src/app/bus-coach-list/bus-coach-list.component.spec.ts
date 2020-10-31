import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusCoachListComponent } from './bus-coach-list.component';

describe('BusCoachListComponent', () => {
  let component: BusCoachListComponent;
  let fixture: ComponentFixture<BusCoachListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusCoachListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusCoachListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
