import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPerfilAdminComponent } from './navbar-perfil-admin.component';

describe('NavbarPerfilAdminComponent', () => {
  let component: NavbarPerfilAdminComponent;
  let fixture: ComponentFixture<NavbarPerfilAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarPerfilAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPerfilAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
