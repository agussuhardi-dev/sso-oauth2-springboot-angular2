import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSewaComponent } from './list-sewa.component';

describe('ListSewaComponent', () => {
  let component: ListSewaComponent;
  let fixture: ComponentFixture<ListSewaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSewaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSewaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
