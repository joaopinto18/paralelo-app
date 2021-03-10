import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDatosPerfilMecanicoComponent } from './vista-datos-perfil-mecanico.component';

describe('VistaDatosPerfilMecanicoComponent', () => {
  let component: VistaDatosPerfilMecanicoComponent;
  let fixture: ComponentFixture<VistaDatosPerfilMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaDatosPerfilMecanicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDatosPerfilMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
