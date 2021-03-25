import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDerechoClienteComponent } from './navbar-derecho-cliente.component';

describe('NavbarDerechoClienteComponent', () => {
  let component: NavbarDerechoClienteComponent;
  let fixture: ComponentFixture<NavbarDerechoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDerechoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDerechoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
