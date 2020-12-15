import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowComidaItalianaPage } from './show-comida-italiana.page';

describe('ShowComidaItalianaPage', () => {
  let component: ShowComidaItalianaPage;
  let fixture: ComponentFixture<ShowComidaItalianaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowComidaItalianaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowComidaItalianaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
