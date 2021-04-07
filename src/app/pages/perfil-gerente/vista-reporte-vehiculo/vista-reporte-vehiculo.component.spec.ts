import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaReporteVehiculoComponent } from './vista-reporte-vehiculo.component';

describe('VistaReporteVehiculoComponent', () => {
  let component: VistaReporteVehiculoComponent;
  let fixture: ComponentFixture<VistaReporteVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaReporteVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaReporteVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
