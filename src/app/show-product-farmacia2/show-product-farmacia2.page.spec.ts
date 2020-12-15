import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowProductFarmacia2Page } from './show-product-farmacia2.page';

describe('ShowProductFarmacia2Page', () => {
  let component: ShowProductFarmacia2Page;
  let fixture: ComponentFixture<ShowProductFarmacia2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProductFarmacia2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowProductFarmacia2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
