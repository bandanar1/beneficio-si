import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowFarmaciasMayoristasPage } from './show-farmacias-mayoristas.page';

describe('ShowFarmaciasMayoristasPage', () => {
  let component: ShowFarmaciasMayoristasPage;
  let fixture: ComponentFixture<ShowFarmaciasMayoristasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFarmaciasMayoristasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowFarmaciasMayoristasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
