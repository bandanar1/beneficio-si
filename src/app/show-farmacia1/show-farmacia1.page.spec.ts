import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowFarmacia1Page } from './show-farmacia1.page';

describe('ShowFarmacia1Page', () => {
  let component: ShowFarmacia1Page;
  let fixture: ComponentFixture<ShowFarmacia1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFarmacia1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowFarmacia1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
