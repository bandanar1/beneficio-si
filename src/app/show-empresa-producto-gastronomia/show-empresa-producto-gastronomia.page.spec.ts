import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowEmpresaProductoGastronomiaPage } from './show-empresa-producto-gastronomia.page';

describe('ShowEmpresaProductoGastronomiaPage', () => {
  let component: ShowEmpresaProductoGastronomiaPage;
  let fixture: ComponentFixture<ShowEmpresaProductoGastronomiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEmpresaProductoGastronomiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowEmpresaProductoGastronomiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
