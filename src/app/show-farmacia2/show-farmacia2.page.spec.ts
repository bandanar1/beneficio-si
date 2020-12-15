import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowFarmacia2Page } from './show-farmacia2.page';

describe('ShowFarmacia2Page', () => {
  let component: ShowFarmacia2Page;
  let fixture: ComponentFixture<ShowFarmacia2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFarmacia2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowFarmacia2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
