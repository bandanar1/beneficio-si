import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowBolichePage } from './show-boliche.page';

describe('ShowBolichePage', () => {
  let component: ShowBolichePage;
  let fixture: ComponentFixture<ShowBolichePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBolichePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowBolichePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
