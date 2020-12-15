import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistanciaModalPage } from './distancia-modal.page';

describe('DistanciaModalPage', () => {
  let component: DistanciaModalPage;
  let fixture: ComponentFixture<DistanciaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistanciaModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistanciaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
