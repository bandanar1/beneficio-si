import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowProductFarmacia3Page } from './show-product-farmacia3.page';

describe('ShowProductFarmacia3Page', () => {
  let component: ShowProductFarmacia3Page;
  let fixture: ComponentFixture<ShowProductFarmacia3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProductFarmacia3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowProductFarmacia3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
