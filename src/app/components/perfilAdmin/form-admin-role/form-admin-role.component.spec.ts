import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdminRoleComponent } from './form-admin-role.component';

describe('FormAdminRoleComponent', () => {
  let component: FormAdminRoleComponent;
  let fixture: ComponentFixture<FormAdminRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAdminRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAdminRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
