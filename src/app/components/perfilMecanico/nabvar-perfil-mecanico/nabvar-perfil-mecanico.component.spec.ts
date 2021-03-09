import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabvarPerfilMecanicoComponent } from './nabvar-perfil-mecanico.component';

describe('NabvarPerfilMecanicoComponent', () => {
  let component: NabvarPerfilMecanicoComponent;
  let fixture: ComponentFixture<NabvarPerfilMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NabvarPerfilMecanicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NabvarPerfilMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
