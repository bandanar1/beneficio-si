import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowEventBolichePage } from './show-event-boliche.page';

describe('ShowEventBolichePage', () => {
  let component: ShowEventBolichePage;
  let fixture: ComponentFixture<ShowEventBolichePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEventBolichePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowEventBolichePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
