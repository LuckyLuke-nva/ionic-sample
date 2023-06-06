import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HcMhKhambenhComponent } from './hc-mh-khambenh.component';

describe('HcMhKhambenhComponent', () => {
  let component: HcMhKhambenhComponent;
  let fixture: ComponentFixture<HcMhKhambenhComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HcMhKhambenhComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HcMhKhambenhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
