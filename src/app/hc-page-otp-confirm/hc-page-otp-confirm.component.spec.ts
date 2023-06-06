import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HcPageOtpConfirmComponent } from './hc-page-otp-confirm.component';

describe('HcPageOtpConfirmComponent', () => {
  let component: HcPageOtpConfirmComponent;
  let fixture: ComponentFixture<HcPageOtpConfirmComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HcPageOtpConfirmComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HcPageOtpConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
