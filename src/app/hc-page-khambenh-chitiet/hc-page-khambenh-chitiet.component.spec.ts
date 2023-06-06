import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HcPageKhambenhChitietComponent } from './hc-page-khambenh-chitiet.component';

describe('HcPageKhambenhChitietComponent', () => {
  let component: HcPageKhambenhChitietComponent;
  let fixture: ComponentFixture<HcPageKhambenhChitietComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HcPageKhambenhChitietComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HcPageKhambenhChitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
