import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebnavDashboardComponent } from './sidebnav-dashboard.component';

describe('SidebnavDashboardComponent', () => {
  let component: SidebnavDashboardComponent;
  let fixture: ComponentFixture<SidebnavDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebnavDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebnavDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
