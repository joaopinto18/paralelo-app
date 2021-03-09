import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaContactanosComponent } from './vista-contactanos.component';

describe('VistaContactanosComponent', () => {
  let component: VistaContactanosComponent;
  let fixture: ComponentFixture<VistaContactanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaContactanosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaContactanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
