import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPerfilClienteComponent } from './navbar-perfil-cliente.component';

describe('NavbarPerfilClienteComponent', () => {
  let component: NavbarPerfilClienteComponent;
  let fixture: ComponentFixture<NavbarPerfilClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarPerfilClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPerfilClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
