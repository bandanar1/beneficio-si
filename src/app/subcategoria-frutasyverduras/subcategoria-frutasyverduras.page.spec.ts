import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubcategoriaFrutasyverdurasPage } from './subcategoria-frutasyverduras.page';

describe('SubcategoriaFrutasyverdurasPage', () => {
  let component: SubcategoriaFrutasyverdurasPage;
  let fixture: ComponentFixture<SubcategoriaFrutasyverdurasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoriaFrutasyverdurasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubcategoriaFrutasyverdurasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
