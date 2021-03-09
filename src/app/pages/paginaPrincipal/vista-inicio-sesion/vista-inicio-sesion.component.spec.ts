import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaInicioSesionComponent } from './vista-inicio-sesion.component';

describe('VistaInicioSesionComponent', () => {
  let component: VistaInicioSesionComponent;
  let fixture: ComponentFixture<VistaInicioSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaInicioSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaInicioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
