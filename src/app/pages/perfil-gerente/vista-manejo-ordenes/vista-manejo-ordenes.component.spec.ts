import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaManejoOrdenesComponent } from './vista-manejo-ordenes.component';

describe('VistaManejoOrdenesComponent', () => {
  let component: VistaManejoOrdenesComponent;
  let fixture: ComponentFixture<VistaManejoOrdenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaManejoOrdenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaManejoOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
