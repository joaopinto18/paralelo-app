import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaRegistroVehiculo2Component } from './vista-registro-vehiculo2.component';

describe('VistaRegistroVehiculo2Component', () => {
  let component: VistaRegistroVehiculo2Component;
  let fixture: ComponentFixture<VistaRegistroVehiculo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaRegistroVehiculo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaRegistroVehiculo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
