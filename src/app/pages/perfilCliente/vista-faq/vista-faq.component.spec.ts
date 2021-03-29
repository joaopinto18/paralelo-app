import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaFaqComponent } from './vista-faq.component';

describe('VistaFaqComponent', () => {
  let component: VistaFaqComponent;
  let fixture: ComponentFixture<VistaFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
