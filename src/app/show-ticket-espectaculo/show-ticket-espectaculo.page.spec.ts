import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowTicketEspectaculoPage } from './show-ticket-espectaculo.page';

describe('ShowTicketEspectaculoPage', () => {
  let component: ShowTicketEspectaculoPage;
  let fixture: ComponentFixture<ShowTicketEspectaculoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTicketEspectaculoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowTicketEspectaculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
