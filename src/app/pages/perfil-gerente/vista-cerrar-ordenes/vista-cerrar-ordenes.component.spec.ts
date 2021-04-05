import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCerrarOrdenesComponent } from './vista-cerrar-ordenes.component';

describe('VistaCerrarOrdenesComponent', () => {
  let component: VistaCerrarOrdenesComponent;
  let fixture: ComponentFixture<VistaCerrarOrdenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaCerrarOrdenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCerrarOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
