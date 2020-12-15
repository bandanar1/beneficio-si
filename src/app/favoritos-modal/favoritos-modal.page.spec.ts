import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavoritosModalPage } from './favoritos-modal.page';

describe('FavoritosModalPage', () => {
  let component: FavoritosModalPage;
  let fixture: ComponentFixture<FavoritosModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritosModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritosModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
