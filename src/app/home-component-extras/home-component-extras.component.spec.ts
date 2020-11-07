import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentExtrasComponent } from './home-component-extras.component';

describe('HomeComponentExtrasComponent', () => {
  let component: HomeComponentExtrasComponent;
  let fixture: ComponentFixture<HomeComponentExtrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponentExtrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponentExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
