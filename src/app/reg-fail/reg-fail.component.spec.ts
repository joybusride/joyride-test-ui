import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegFailComponent } from './reg-fail.component';

describe('RegFailComponent', () => {
  let component: RegFailComponent;
  let fixture: ComponentFixture<RegFailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegFailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
