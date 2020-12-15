import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowProductFarmacia1Page } from './show-product-farmacia1.page';

describe('ShowProductFarmacia1Page', () => {
  let component: ShowProductFarmacia1Page;
  let fixture: ComponentFixture<ShowProductFarmacia1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProductFarmacia1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowProductFarmacia1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
