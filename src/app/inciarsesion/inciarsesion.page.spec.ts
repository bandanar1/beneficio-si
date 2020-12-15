import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InciarsesionPage } from './inciarsesion.page';

describe('InciarsesionPage', () => {
  let component: InciarsesionPage;
  let fixture: ComponentFixture<InciarsesionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InciarsesionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InciarsesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
