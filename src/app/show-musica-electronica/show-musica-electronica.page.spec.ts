import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowMusicaElectronicaPage } from './show-musica-electronica.page';

describe('ShowMusicaElectronicaPage', () => {
  let component: ShowMusicaElectronicaPage;
  let fixture: ComponentFixture<ShowMusicaElectronicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMusicaElectronicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowMusicaElectronicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
