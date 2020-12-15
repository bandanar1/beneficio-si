import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MistarjetasPage } from './mistarjetas.page';

describe('MistarjetasPage', () => {
  let component: MistarjetasPage;
  let fixture: ComponentFixture<MistarjetasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MistarjetasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MistarjetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
