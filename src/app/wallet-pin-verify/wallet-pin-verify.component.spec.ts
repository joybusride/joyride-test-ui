import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletPinVerifyComponent } from './wallet-pin-verify.component';

describe('WalletPinVerifyComponent', () => {
  let component: WalletPinVerifyComponent;
  let fixture: ComponentFixture<WalletPinVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletPinVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletPinVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
