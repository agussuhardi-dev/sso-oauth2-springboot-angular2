import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSewaComponent } from './form-sewa.component';

describe('FormSewaComponent', () => {
  let component: FormSewaComponent;
  let fixture: ComponentFixture<FormSewaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSewaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSewaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
