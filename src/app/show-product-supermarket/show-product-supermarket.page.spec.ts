import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowProductSupermarketPage } from './show-product-supermarket.page';

describe('ShowProductSupermarketPage', () => {
  let component: ShowProductSupermarketPage;
  let fixture: ComponentFixture<ShowProductSupermarketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProductSupermarketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowProductSupermarketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
