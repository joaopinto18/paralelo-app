import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDatosPerfilClienteComponent } from './vista-datos-perfil-cliente.component';

describe('VistaDatosPerfilClienteComponent', () => {
  let component: VistaDatosPerfilClienteComponent;
  let fixture: ComponentFixture<VistaDatosPerfilClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaDatosPerfilClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDatosPerfilClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
