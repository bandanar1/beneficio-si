import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowTicketBolichePage } from './show-ticket-boliche.page';

describe('ShowTicketBolichePage', () => {
  let component: ShowTicketBolichePage;
  let fixture: ComponentFixture<ShowTicketBolichePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTicketBolichePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowTicketBolichePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
