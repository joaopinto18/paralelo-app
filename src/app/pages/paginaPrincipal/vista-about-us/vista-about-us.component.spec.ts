import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAboutUsComponent } from './vista-about-us.component';

describe('VistaAboutUsComponent', () => {
  let component: VistaAboutUsComponent;
  let fixture: ComponentFixture<VistaAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
