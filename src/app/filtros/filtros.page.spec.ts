import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiltrosPage } from './filtros.page';

describe('FiltrosPage', () => {
  let component: FiltrosPage;
  let fixture: ComponentFixture<FiltrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiltrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
