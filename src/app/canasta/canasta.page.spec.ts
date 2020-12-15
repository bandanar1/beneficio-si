import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CanastaPage } from './canasta.page';

describe('CanastaPage', () => {
  let component: CanastaPage;
  let fixture: ComponentFixture<CanastaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanastaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CanastaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
