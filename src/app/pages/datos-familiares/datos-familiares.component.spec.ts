import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosFamiliaresComponent } from './datos-familiares.component';

describe('DatosFamiliaresComponent', () => {
  let component: DatosFamiliaresComponent;
  let fixture: ComponentFixture<DatosFamiliaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosFamiliaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosFamiliaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
