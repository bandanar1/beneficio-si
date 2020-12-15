import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfigcuentaPage } from './configcuenta.page';

describe('ConfigcuentaPage', () => {
  let component: ConfigcuentaPage;
  let fixture: ComponentFixture<ConfigcuentaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigcuentaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigcuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
