import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowSupermarketPage } from './show-supermarket.page';

describe('ShowSupermarketPage', () => {
  let component: ShowSupermarketPage;
  let fixture: ComponentFixture<ShowSupermarketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSupermarketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowSupermarketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
