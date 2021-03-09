import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaRegistrarseComponent } from './vista-registrarse.component';

describe('VistaRegistrarseComponent', () => {
  let component: VistaRegistrarseComponent;
  let fixture: ComponentFixture<VistaRegistrarseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaRegistrarseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaRegistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
