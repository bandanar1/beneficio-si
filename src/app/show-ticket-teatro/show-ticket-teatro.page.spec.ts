import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowTicketTeatroPage } from './show-ticket-teatro.page';

describe('ShowTicketTeatroPage', () => {
  let component: ShowTicketTeatroPage;
  let fixture: ComponentFixture<ShowTicketTeatroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTicketTeatroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowTicketTeatroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
