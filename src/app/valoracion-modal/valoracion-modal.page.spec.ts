import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValoracionModalPage } from './valoracion-modal.page';

describe('ValoracionModalPage', () => {
  let component: ValoracionModalPage;
  let fixture: ComponentFixture<ValoracionModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoracionModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValoracionModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
