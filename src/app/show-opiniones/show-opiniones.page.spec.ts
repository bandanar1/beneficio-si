import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowOpinionesPage } from './show-opiniones.page';

describe('ShowOpinionesPage', () => {
  let component: ShowOpinionesPage;
  let fixture: ComponentFixture<ShowOpinionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOpinionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowOpinionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
