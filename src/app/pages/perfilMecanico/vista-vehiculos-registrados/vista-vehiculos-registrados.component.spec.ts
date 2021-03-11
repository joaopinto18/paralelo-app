import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaVehiculosRegistradosComponent } from './vista-vehiculos-registrados.component';

describe('VistaVehiculosRegistradosComponent', () => {
  let component: VistaVehiculosRegistradosComponent;
  let fixture: ComponentFixture<VistaVehiculosRegistradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaVehiculosRegistradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaVehiculosRegistradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
