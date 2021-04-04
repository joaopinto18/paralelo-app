import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaReporteExtrasComponent } from './vista-reporte-extras.component';

describe('VistaReporteExtrasComponent', () => {
  let component: VistaReporteExtrasComponent;
  let fixture: ComponentFixture<VistaReporteExtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaReporteExtrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaReporteExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
