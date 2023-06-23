import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultElementComponent } from './result-element.component';

describe('ResultElementComponent', () => {
  let component: ResultElementComponent;
  let fixture: ComponentFixture<ResultElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultElementComponent]
    });
    fixture = TestBed.createComponent(ResultElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
