import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaReporteMecanicoComponent } from './vista-reporte-mecanico.component';

describe('VistaReporteMecanicoComponent', () => {
  let component: VistaReporteMecanicoComponent;
  let fixture: ComponentFixture<VistaReporteMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaReporteMecanicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaReporteMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
