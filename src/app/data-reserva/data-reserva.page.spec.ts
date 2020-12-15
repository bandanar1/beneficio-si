import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DataReservaPage } from './data-reserva.page';

describe('DataReservaPage', () => {
  let component: DataReservaPage;
  let fixture: ComponentFixture<DataReservaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataReservaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DataReservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
