import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmpresacomentariosPage } from './empresacomentarios.page';

describe('EmpresacomentariosPage', () => {
  let component: EmpresacomentariosPage;
  let fixture: ComponentFixture<EmpresacomentariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresacomentariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmpresacomentariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
