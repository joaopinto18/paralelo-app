import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaReporteClienteComponent } from './vista-reporte-cliente.component';

describe('VistaReporteClienteComponent', () => {
  let component: VistaReporteClienteComponent;
  let fixture: ComponentFixture<VistaReporteClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaReporteClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaReporteClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
