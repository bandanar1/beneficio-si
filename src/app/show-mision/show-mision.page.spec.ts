import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowMisionPage } from './show-mision.page';

describe('ShowMisionPage', () => {
  let component: ShowMisionPage;
  let fixture: ComponentFixture<ShowMisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMisionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowMisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
