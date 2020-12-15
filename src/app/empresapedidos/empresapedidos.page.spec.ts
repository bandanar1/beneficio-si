import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmpresapedidosPage } from './empresapedidos.page';

describe('EmpresapedidosPage', () => {
  let component: EmpresapedidosPage;
  let fixture: ComponentFixture<EmpresapedidosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresapedidosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmpresapedidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
