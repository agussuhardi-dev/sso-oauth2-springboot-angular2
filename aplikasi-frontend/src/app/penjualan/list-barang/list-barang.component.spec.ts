import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBarangComponent } from './list-barang.component';

describe('ListBarangComponent', () => {
  let component: ListBarangComponent;
  let fixture: ComponentFixture<ListBarangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBarangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBarangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
