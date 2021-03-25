import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaRegistroVehiculo3Component } from './vista-registro-vehiculo3.component';

describe('VistaRegistroVehiculo3Component', () => {
  let component: VistaRegistroVehiculo3Component;
  let fixture: ComponentFixture<VistaRegistroVehiculo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaRegistroVehiculo3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaRegistroVehiculo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
