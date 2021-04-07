import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCitasAsignadasComponent } from './vista-citas-asignadas.component';

describe('VistaCitasAsignadasComponent', () => {
  let component: VistaCitasAsignadasComponent;
  let fixture: ComponentFixture<VistaCitasAsignadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaCitasAsignadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCitasAsignadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
