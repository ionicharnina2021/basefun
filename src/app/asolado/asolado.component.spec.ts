import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsoladoComponent } from './asolado.component';

describe('AsoladoComponent', () => {
  let component: AsoladoComponent;
  let fixture: ComponentFixture<AsoladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsoladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsoladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
