import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HamburguesamcPage } from './hamburguesamc.page';

describe('HamburguesamcPage', () => {
  let component: HamburguesamcPage;
  let fixture: ComponentFixture<HamburguesamcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamburguesamcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HamburguesamcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
