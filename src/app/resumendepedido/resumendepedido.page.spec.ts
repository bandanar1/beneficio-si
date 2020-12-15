import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResumendepedidoPage } from './resumendepedido.page';

describe('ResumendepedidoPage', () => {
  let component: ResumendepedidoPage;
  let fixture: ComponentFixture<ResumendepedidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumendepedidoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResumendepedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
