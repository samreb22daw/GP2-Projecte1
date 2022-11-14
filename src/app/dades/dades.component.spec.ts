import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaulaDades } from './dades.component';

describe('DadesComponent', () => {
  let component: TaulaDades;
  let fixture: ComponentFixture<TaulaDades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaulaDades ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaulaDades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
