import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComprasPage } from './compras.page';

describe('ComprasPage', () => {
  let component: ComprasPage;
  let fixture: ComponentFixture<ComprasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
