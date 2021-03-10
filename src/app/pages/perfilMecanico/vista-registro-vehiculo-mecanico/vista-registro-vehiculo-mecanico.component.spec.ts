import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaRegistroVehiculoMecanicoComponent } from './vista-registro-vehiculo-mecanico.component';

describe('VistaRegistroVehiculoMecanicoComponent', () => {
  let component: VistaRegistroVehiculoMecanicoComponent;
  let fixture: ComponentFixture<VistaRegistroVehiculoMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaRegistroVehiculoMecanicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaRegistroVehiculoMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
