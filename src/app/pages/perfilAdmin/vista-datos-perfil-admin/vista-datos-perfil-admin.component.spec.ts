import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDatosPerfilAdminComponent } from './vista-datos-perfil-admin.component';

describe('VistaDatosPerfilAdminComponent', () => {
  let component: VistaDatosPerfilAdminComponent;
  let fixture: ComponentFixture<VistaDatosPerfilAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaDatosPerfilAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDatosPerfilAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
