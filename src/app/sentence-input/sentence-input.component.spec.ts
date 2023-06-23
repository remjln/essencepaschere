import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceInputComponent } from './sentence-input.component';

describe('SentenceInputComponent', () => {
  let component: SentenceInputComponent;
  let fixture: ComponentFixture<SentenceInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentenceInputComponent]
    });
    fixture = TestBed.createComponent(SentenceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
