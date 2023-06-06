import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HcPagePatientSearchComponent } from './hc-page-patient-search.component';

describe('HcPagePatientSearchComponent', () => {
  let component: HcPagePatientSearchComponent;
  let fixture: ComponentFixture<HcPagePatientSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HcPagePatientSearchComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HcPagePatientSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
