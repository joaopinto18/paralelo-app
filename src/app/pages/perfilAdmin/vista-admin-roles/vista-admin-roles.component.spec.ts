import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAdminRolesComponent } from './vista-admin-roles.component';

describe('VistaAdminRolesComponent', () => {
  let component: VistaAdminRolesComponent;
  let fixture: ComponentFixture<VistaAdminRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaAdminRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAdminRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
