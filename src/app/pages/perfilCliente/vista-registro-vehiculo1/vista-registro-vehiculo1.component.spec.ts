import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaRegistroVehiculo1Component } from './vista-registro-vehiculo1.component';

describe('VistaRegistroVehiculo1Component', () => {
  let component: VistaRegistroVehiculo1Component;
  let fixture: ComponentFixture<VistaRegistroVehiculo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaRegistroVehiculo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaRegistroVehiculo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
