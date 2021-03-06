import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHijosByPersonalComponent } from './list-hijos-by-personal.component';

describe('ListHijosByPersonalComponent', () => {
  let component: ListHijosByPersonalComponent;
  let fixture: ComponentFixture<ListHijosByPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHijosByPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHijosByPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
