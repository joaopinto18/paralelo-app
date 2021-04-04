import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPerfilGerenteComponent } from './navbar-perfil-gerente.component';

describe('NavbarPerfilGerenteComponent', () => {
  let component: NavbarPerfilGerenteComponent;
  let fixture: ComponentFixture<NavbarPerfilGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarPerfilGerenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPerfilGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
