import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowCinemarkPage } from './show-cinemark.page';

describe('ShowCinemarkPage', () => {
  let component: ShowCinemarkPage;
  let fixture: ComponentFixture<ShowCinemarkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCinemarkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowCinemarkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
