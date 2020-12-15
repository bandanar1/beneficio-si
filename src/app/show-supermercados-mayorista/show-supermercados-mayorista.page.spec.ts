import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowSupermercadosMayoristaPage } from './show-supermercados-mayorista.page';

describe('ShowSupermercadosMayoristaPage', () => {
  let component: ShowSupermercadosMayoristaPage;
  let fixture: ComponentFixture<ShowSupermercadosMayoristaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSupermercadosMayoristaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowSupermercadosMayoristaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
