import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowTeatroPage } from './show-teatro.page';

describe('ShowTeatroPage', () => {
  let component: ShowTeatroPage;
  let fixture: ComponentFixture<ShowTeatroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTeatroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowTeatroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
