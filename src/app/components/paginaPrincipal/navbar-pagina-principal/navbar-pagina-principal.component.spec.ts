import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPaginaPrincipalComponent } from './navbar-pagina-principal.component';

describe('NavbarPaginaPrincipalComponent', () => {
  let component: NavbarPaginaPrincipalComponent;
  let fixture: ComponentFixture<NavbarPaginaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarPaginaPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPaginaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
