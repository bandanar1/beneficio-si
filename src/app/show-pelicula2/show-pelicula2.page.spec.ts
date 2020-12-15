import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowPelicula2Page } from './show-pelicula2.page';

describe('ShowPelicula2Page', () => {
  let component: ShowPelicula2Page;
  let fixture: ComponentFixture<ShowPelicula2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPelicula2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowPelicula2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
