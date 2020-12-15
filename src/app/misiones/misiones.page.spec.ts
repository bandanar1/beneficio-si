import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisionesPage } from './misiones.page';

describe('MisionesPage', () => {
  let component: MisionesPage;
  let fixture: ComponentFixture<MisionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
