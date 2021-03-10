import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabvarDerechoPerfilMecanicoComponent } from './nabvar-derecho-perfil-mecanico.component';

describe('NabvarDerechoPerfilMecanicoComponent', () => {
  let component: NabvarDerechoPerfilMecanicoComponent;
  let fixture: ComponentFixture<NabvarDerechoPerfilMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NabvarDerechoPerfilMecanicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NabvarDerechoPerfilMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
