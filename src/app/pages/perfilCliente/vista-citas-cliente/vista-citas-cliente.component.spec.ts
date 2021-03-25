import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCitasClienteComponent } from './vista-citas-cliente.component';

describe('VistaCitasClienteComponent', () => {
  let component: VistaCitasClienteComponent;
  let fixture: ComponentFixture<VistaCitasClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaCitasClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCitasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
