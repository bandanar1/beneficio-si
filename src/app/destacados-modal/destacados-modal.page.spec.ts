import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DestacadosModalPage } from './destacados-modal.page';

describe('DestacadosModalPage', () => {
  let component: DestacadosModalPage;
  let fixture: ComponentFixture<DestacadosModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestacadosModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DestacadosModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
