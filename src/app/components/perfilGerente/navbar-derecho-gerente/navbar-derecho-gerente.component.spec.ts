import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDerechoGerenteComponent } from './navbar-derecho-gerente.component';

describe('NavbarDerechoGerenteComponent', () => {
  let component: NavbarDerechoGerenteComponent;
  let fixture: ComponentFixture<NavbarDerechoGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDerechoGerenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDerechoGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
