import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowPeliculaPage } from './show-pelicula.page';

describe('ShowPeliculaPage', () => {
  let component: ShowPeliculaPage;
  let fixture: ComponentFixture<ShowPeliculaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPeliculaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowPeliculaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
