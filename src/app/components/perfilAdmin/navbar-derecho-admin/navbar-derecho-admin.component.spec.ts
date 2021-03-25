import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDerechoAdminComponent } from './navbar-derecho-admin.component';

describe('NavbarDerechoAdminComponent', () => {
  let component: NavbarDerechoAdminComponent;
  let fixture: ComponentFixture<NavbarDerechoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDerechoAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDerechoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
