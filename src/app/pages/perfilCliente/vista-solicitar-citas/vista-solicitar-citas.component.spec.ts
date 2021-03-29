import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSolicitarCitasComponent } from './vista-solicitar-citas.component';

describe('VistaSolicitarCitasComponent', () => {
  let component: VistaSolicitarCitasComponent;
  let fixture: ComponentFixture<VistaSolicitarCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaSolicitarCitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaSolicitarCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
