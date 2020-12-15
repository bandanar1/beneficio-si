import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DataBolichePage } from './data-boliche.page';

describe('DataBolichePage', () => {
  let component: DataBolichePage;
  let fixture: ComponentFixture<DataBolichePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBolichePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DataBolichePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
