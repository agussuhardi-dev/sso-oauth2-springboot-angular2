import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBarangComponent } from './form-barang.component';

describe('FormBarangComponent', () => {
  let component: FormBarangComponent;
  let fixture: ComponentFixture<FormBarangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBarangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBarangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
