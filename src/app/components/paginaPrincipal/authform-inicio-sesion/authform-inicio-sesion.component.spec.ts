import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthformInicioSesionComponent } from './authform-inicio-sesion.component';

describe('AuthformInicioSesionComponent', () => {
  let component: AuthformInicioSesionComponent;
  let fixture: ComponentFixture<AuthformInicioSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthformInicioSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthformInicioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
