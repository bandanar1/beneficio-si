import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Nueva1Page } from './nueva1.page';

describe('Nueva1Page', () => {
  let component: Nueva1Page;
  let fixture: ComponentFixture<Nueva1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nueva1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Nueva1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
