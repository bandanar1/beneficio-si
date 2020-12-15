import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowFarmacia3Page } from './show-farmacia3.page';

describe('ShowFarmacia3Page', () => {
  let component: ShowFarmacia3Page;
  let fixture: ComponentFixture<ShowFarmacia3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFarmacia3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowFarmacia3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
