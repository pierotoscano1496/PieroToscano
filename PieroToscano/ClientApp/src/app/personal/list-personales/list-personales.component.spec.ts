import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonalesComponent } from './list-personales.component';

describe('ListPersonalesComponent', () => {
  let component: ListPersonalesComponent;
  let fixture: ComponentFixture<ListPersonalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPersonalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
