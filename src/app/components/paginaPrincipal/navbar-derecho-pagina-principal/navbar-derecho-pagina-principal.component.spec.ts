import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDerechoPaginaPrincipalComponent } from './navbar-derecho-pagina-principal.component';

describe('NavbarDerechoPaginaPrincipalComponent', () => {
  let component: NavbarDerechoPaginaPrincipalComponent;
  let fixture: ComponentFixture<NavbarDerechoPaginaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDerechoPaginaPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDerechoPaginaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
