import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmpresatarjetasPage } from './empresatarjetas.page';

describe('EmpresatarjetasPage', () => {
  let component: EmpresatarjetasPage;
  let fixture: ComponentFixture<EmpresatarjetasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresatarjetasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmpresatarjetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
