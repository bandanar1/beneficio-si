import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerMapaPage } from './ver-mapa.page';

describe('VerMapaPage', () => {
  let component: VerMapaPage;
  let fixture: ComponentFixture<VerMapaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMapaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerMapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
