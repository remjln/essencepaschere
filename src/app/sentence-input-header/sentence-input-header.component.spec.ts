import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceInputHeaderComponent } from './sentence-input-header.component';

describe('SentenceInputHeaderComponent', () => {
  let component: SentenceInputHeaderComponent;
  let fixture: ComponentFixture<SentenceInputHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentenceInputHeaderComponent]
    });
    fixture = TestBed.createComponent(SentenceInputHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
