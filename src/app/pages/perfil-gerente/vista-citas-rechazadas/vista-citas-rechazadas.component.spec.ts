import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCitasRechazadasComponent } from './vista-citas-rechazadas.component';

describe('VistaCitasRechazadasComponent', () => {
  let component: VistaCitasRechazadasComponent;
  let fixture: ComponentFixture<VistaCitasRechazadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaCitasRechazadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCitasRechazadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
