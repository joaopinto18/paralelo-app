import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadritoComponent } from './cuadrito.component';

describe('CuadritoComponent', () => {
  let component: CuadritoComponent;
  let fixture: ComponentFixture<CuadritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
