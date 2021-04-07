import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaManejaCitasComponent } from './vista-maneja-citas.component';

describe('VistaManejaCitasComponent', () => {
  let component: VistaManejaCitasComponent;
  let fixture: ComponentFixture<VistaManejaCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaManejaCitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaManejaCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
